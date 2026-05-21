#!/usr/bin/env python3
import subprocess
import tempfile
import os
import requests
import json
import re
import base64
import signal
import threading
from pathlib import Path

OLLAMA_URL = "http://localhost:11434/api/chat"
MODEL = "qwen3:8b"
VOICE_MODEL = os.path.expanduser("~/.local/share/piper/voices/es/es_MX/claude/high/es_MX-claude-high.onnx")

SYSTEM_PROMPT = """Eres Shinobu, el asistente personal de Jesuar en su ASUS ROG Strix G16 2025 con CachyOS Linux, Hyprland y zsh.
Eres inteligente, concisa y natural como un asistente real. Responde en español latino conversacional. Máximo 2 oraciones.
Cuando necesites datos del sistema escribe el comando entre backticks y yo lo ejecutaré: `free -h`, `nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader`.
Interpreta el resultado del comando de forma natural y conversacional, nunca lo repitas textualmente.
Cuando necesites buscar información en internet usa: SEARCH:tu consulta aquí
Cuando recibas información de internet, extrae solo el dato relevante y respóndelo naturalmente.
Cuando el usuario pida que veas o analices la pantalla usa: VISION:What do you see on the screen?
Cuando recibas información visual, traduce y resume la descripción en español natural.
Para interactuar con la pantalla usa EXACTAMENTE este formato sin backticks:
SCREEN:CLICK:950,540
SCREEN:ESCRIBIR:hola mundo
SCREEN:TECLA:super+q
SCREEN:SCROLL:down
NUNCA escribas el atajo de teclado como texto, siempre usa SCREEN:TECLA: para ejecutarlo.
Cuando el usuario pida cerrar una ventana, ejecuta INMEDIATAMENTE: SCREEN:HYPR:closewindow active
SCREEN:HYPR:workspace +1
SCREEN:HYPR:fullscreen 1
No preguntes confirmación para acciones simples de ventanas, ejecútalas directamente."""

HISTORIAL_PATH = Path.home() / ".local/share/jarvis/historial.json"
HISTORIAL_PATH.parent.mkdir(parents=True, exist_ok=True)

escucha_activa = threading.Event()

# Atajos de voz directos — se ejecutan sin pasar por el modelo
ATAJOS_VOZ = {
    "cerrar ventana": "HYPR:closewindow active",
    "cierra la ventana": "HYPR:closewindow active",
    "cierra esto": "HYPR:closewindow active",
    "minimizar": "HYPR:movetoworkspacesilent special",
    "maximizar": "HYPR:fullscreen 1",
    "siguiente workspace": "HYPR:workspace +1",
    "workspace anterior": "HYPR:workspace -1",
    "captura de pantalla": "TECLA:super+shift+s",
}

def obtener_apps_instaladas():
    """Lee todos los .desktop y extrae nombre -> comando ejecutable."""
    apps = {}
    desktop_dir = Path("/usr/share/applications")
    for desktop in desktop_dir.glob("*.desktop"):
        try:
            nombre = ""
            exec_cmd = ""
            with open(desktop) as f:
                for linea in f:
                    if linea.startswith("Name=") and not nombre:
                        nombre = linea.split("=", 1)[1].strip().lower()
                    if linea.startswith("Exec=") and not exec_cmd:
                        exec_cmd = linea.split("=", 1)[1].strip()
                        exec_cmd = re.sub(r'%[a-zA-Z]', '', exec_cmd).strip()
            if nombre and exec_cmd:
                apps[nombre] = exec_cmd
                # También indexar por nombre del archivo
                apps[desktop.stem.lower()] = exec_cmd
        except:
            pass
    return apps

APPS_INSTALADAS = {}

# ─── Señal USR1 ────────────────────────────────────────────────────────────────

def handle_signal(sig, frame):
    escucha_activa.set()


# ─── Notificaciones Noctalia ───────────────────────────────────────────────────

def toast(titulo, cuerpo, tipo="notice", duracion=3000, icono=""):
    datos = json.dumps({
        "title": titulo,
        "body": cuerpo,
        "icon": icono,
        "type": tipo,
        "duration": duracion
    })
    subprocess.Popen(
        ["qs", "-c", "noctalia-shell", "ipc", "call", "toast", "send", datos],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )


# ─── Historial ─────────────────────────────────────────────────────────────────

def cargar_historial():
    if HISTORIAL_PATH.exists():
        with open(HISTORIAL_PATH) as f:
            return json.load(f)
    return []


def guardar_historial(historial):
    with open(HISTORIAL_PATH, "w") as f:
        json.dump(historial[-50:], f, ensure_ascii=False, indent=2)


# ─── Modelos ───────────────────────────────────────────────────────────────────

def liberar_modelo(modelo):
    try:
        requests.post("http://localhost:11434/api/generate", json={
            "model": modelo,
            "prompt": "",
            "keep_alive": 0
        }, timeout=5)
    except:
        pass


# ─── Visión ────────────────────────────────────────────────────────────────────

def ver_pantalla(pregunta="Describe what you see on this screen", monitor="HDMI-A-3"):
    screenshot = "/tmp/shinobu_screen.png"
    subprocess.run(["grim", "-o", monitor, screenshot], capture_output=True)
    liberar_modelo("qwen3:8b")
    with open(screenshot, "rb") as f:
        img = base64.b64encode(f.read()).decode()
    response = requests.post("http://localhost:11434/api/generate", json={
        "model": "moondream:1.8b",
        "prompt": pregunta,
        "images": [img],
        "stream": False
    })
    liberar_modelo("moondream:1.8b")
    return response.json().get("response", "No pude analizar la pantalla")


# ─── Control de pantalla ───────────────────────────────────────────────────────

def controlar_pantalla(accion):
    try:
        if accion.startswith("CLICK:"):
            coords = accion.replace("CLICK:", "").strip().split(",")
            x, y = int(coords[0]), int(coords[1])
            subprocess.run(["xdotool", "mousemove", str(x), str(y)], capture_output=True)
            subprocess.run(["xdotool", "click", "1"], capture_output=True)
            return f"Clic en {x},{y}"
        elif accion.startswith("ESCRIBIR:"):
            texto = accion.replace("ESCRIBIR:", "").strip()
            subprocess.run(["xdotool", "type", "--delay", "50", texto], capture_output=True)
            return f"Escribí: {texto}"
        elif accion.startswith("TECLA:"):
            tecla = accion.replace("TECLA:", "").strip()
            subprocess.run(["xdotool", "key", tecla], capture_output=True)
            return f"Tecla: {tecla}"
        elif accion.startswith("SCROLL:"):
            direccion = accion.replace("SCROLL:", "").strip()
            boton = "4" if direccion == "up" else "5"
            for _ in range(3):
                subprocess.run(["xdotool", "click", boton], capture_output=True)
            return f"Scroll {direccion}"
        elif accion.startswith("HYPR:"):
            dispatch = accion.replace("HYPR:", "").strip()
            subprocess.run(["hyprctl", "dispatch"] + dispatch.split(), capture_output=True)
            return f"Hyprland: {dispatch}"
        return "Acción desconocida"
    except Exception as e:
        return f"Error xdotool: {e}"


def detectar_atajo(prompt):
    prompt_lower = prompt.lower()
    for frase, accion in ATAJOS_VOZ.items():
        if frase in prompt_lower:
            return controlar_pantalla(accion)
    return None


# ─── Voz entrada ───────────────────────────────────────────────────────────────

def escuchar():
    toast("Shinobu", "Escuchando...", icono="microphone", duracion=8000)
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        wav_path = f.name
    subprocess.run([
        "sox", "-d", "-r", "16000", "-c", "1", "-b", "16", wav_path,
        "silence", "1", "0.1", "1%", "1", "1.5", "1%"
    ], capture_output=True)
    subprocess.run(
        ["whisper", wav_path, "--language", "Spanish", "--model", "small",
         "--output_format", "txt", "--output_dir", "/tmp"],
        capture_output=True, text=True
    )
    txt_path = "/tmp/" + os.path.basename(wav_path).replace(".wav", ".txt")
    try:
        with open(txt_path) as f:
            texto = f.read().strip()
        os.unlink(wav_path)
        return texto
    except:
        return ""


# ─── Enriquecer prompt con datos reales ────────────────────────────────────────

def enriquecer_prompt(prompt):
    prompt_lower = prompt.lower()
    extras = ""
    if any(p in prompt_lower for p in ["hora", "tiempo", "cuando", "qué día"]):
        hora = subprocess.run(
            "date +'%I:%M %p del %A %d de %B de %Y'",
            shell=True, capture_output=True, text=True
        ).stdout.strip()
        extras += f"[Hora actual: {hora}] "
    if any(p in prompt_lower for p in ["ram", "memoria"]):
        ram = subprocess.run(
            "free -h | awk 'NR==2{print $7\" disponible de \"$2}'",
            shell=True, capture_output=True, text=True
        ).stdout.strip()
        extras += f"[RAM: {ram}] "
    if any(p in prompt_lower for p in ["temperatura", "gpu", "caliente"]):
        temp = subprocess.run(
            "nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader",
            shell=True, capture_output=True, text=True
        ).stdout.strip()
        extras += f"[Temperatura GPU: {temp}°C] "
    if any(p in prompt_lower for p in ["disco", "espacio"]):
        disco = subprocess.run(
            "df -h / | awk 'NR==2{print $4\" disponible\"}'",
            shell=True, capture_output=True, text=True
        ).stdout.strip()
        extras += f"[Disco: {disco}] "
    return extras + prompt if extras else prompt


# ─── Cerebro ───────────────────────────────────────────────────────────────────

def pensar(prompt, historial, contexto_web=""):
    toast("Shinobu", "Pensando...", icono="sparkles", duracion=10000)
    prompt_enriquecido = enriquecer_prompt(prompt)
    historial.append({"role": "user", "content": prompt_enriquecido})
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    if contexto_web:
        messages.append({
            "role": "system",
            "content": f"Información de contexto para responder:\n{contexto_web}\nUsa esta info para dar una respuesta natural y concisa en español."
        })
    messages += historial
    response = requests.post(OLLAMA_URL, json={
        "model": MODEL,
        "messages": messages,
        "stream": False,
        "options": {"temperature": 0.7}
    })
    respuesta = response.json()["message"]["content"]
    respuesta = re.sub(r'<think>.*?</think>', '', respuesta, flags=re.DOTALL).strip()
    historial.append({"role": "assistant", "content": respuesta})
    return respuesta, historial


# ─── Búsqueda web ──────────────────────────────────────────────────────────────

def buscar_web(query):
    try:
        response = requests.get(
            "http://localhost:8081/search",
            params={"q": query, "format": "json", "language": "es"},
            timeout=5
        )
        resultados = response.json().get("results", [])[:3]
        if not resultados:
            return "No encontré resultados en internet."
        resumen = "Información encontrada en internet:\n"
        for r in resultados:
            titulo = r.get('title', '')
            contenido = r.get('content', '')[:300]
            resumen += f"- {titulo}: {contenido}\n"
        return resumen
    except Exception as e:
        return f"Error al buscar: {e}"


# ─── Comandos del sistema ──────────────────────────────────────────────────────

def ejecutar_comando(texto):
    comandos = re.findall(r'`([^`]+)`', texto)
    for cmd in comandos:
        try:
            cmd_lower = cmd.lower().split()[0]
            # Buscar en apps instaladas
            es_app = cmd_lower in APPS_INSTALADAS or any(
                cmd_lower in nombre for nombre in APPS_INSTALADAS
            )
            if es_app:
                exec_cmd = APPS_INSTALADAS.get(cmd_lower, cmd)
                subprocess.Popen(exec_cmd, shell=True,
                                 stdout=subprocess.DEVNULL,
                                 stderr=subprocess.DEVNULL,
                                 start_new_session=True)
                texto = texto.replace(f'`{cmd}`', "abriendo")
            else:
                resultado = subprocess.run(cmd, shell=True, capture_output=True,
                                           text=True, timeout=5)
                texto = texto.replace(f'`{cmd}`', resultado.stdout.strip())
        except Exception as e:
            texto = texto.replace(f'`{cmd}`', f"error: {e}")
    # Control de pantalla
    screen_matches = re.findall(r'SCREEN:([^\n`]+)', texto)
    for accion in screen_matches:
        resultado = controlar_pantalla(accion.strip())
        texto = re.sub(rf'SCREEN:{re.escape(accion)}', resultado, texto)

    return texto


# ─── Voz salida ────────────────────────────────────────────────────────────────

def hablar(texto):
    toast("Shinobu", texto[:100] + ("..." if len(texto) > 100 else ""),
          icono="chat", duracion=5000)
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
        wav_path = f.name
    subprocess.run(
        ["piper-tts", "--model", VOICE_MODEL, "--output_file", wav_path],
        input=texto.encode(),
        capture_output=True
    )
    subprocess.run(["aplay", wav_path], capture_output=True)
    os.unlink(wav_path)


# ─── Contexto del sistema ──────────────────────────────────────────────────────

def obtener_contexto_sistema():
    datos = {}
    cmds = {
        "apps_instaladas": "pacman -Qq | head -50",
        "disco": "df -h --output=target,used,avail | head -10",
        "ram": "free -h | awk 'NR==2{print $2\" total, \"$7\" disponible\"}'",
        "gpu": "nvidia-smi --query-gpu=name,temperature.gpu,memory.used,memory.total --format=csv,noheader",
        "procesos": "ps aux --sort=-%cpu | awk 'NR>1{print $11}' | head -20"
    }
    for key, cmd in cmds.items():
        try:
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=5)
            datos[key] = result.stdout.strip()
        except:
            datos[key] = "no disponible"
    return datos


# ─── Main ──────────────────────────────────────────────────────────────────────

def main():
    signal.signal(signal.SIGUSR1, handle_signal)
    global APPS_INSTALADAS
    APPS_INSTALADAS = obtener_apps_instaladas()

    sistema = obtener_contexto_sistema()
    contexto_sistema = f"""
Tu sistema actual:
- Apps instaladas: {', '.join(list(APPS_INSTALADAS.keys())[:80])}
- Disco: {sistema['disco']}
- RAM: {sistema['ram']}
- GPU: {sistema['gpu']}
- Procesos activos: {sistema['procesos']}

Para abrir aplicaciones usa el nombre entre backticks: `kitty`, `brave`, `steam`, etc.
Para archivos usa: `ls ~`, `rm archivo`, `mv origen destino`, etc.
"""
    global SYSTEM_PROMPT
    SYSTEM_PROMPT += contexto_sistema

    historial = cargar_historial()
    toast("Shinobu", "Lista", icono="sparkles", duracion=2000)

    while True:
        try:
            escucha_activa.wait()
            escucha_activa.clear()

            prompt = escuchar()
            if not prompt:
                toast("Shinobu", "No te escuché", tipo="warning", duracion=2000)
                continue

            # Atajos directos sin pasar por el modelo
            atajo = detectar_atajo(prompt)
            if atajo:
                hablar("Listo")
                continue

            respuesta, historial = pensar(prompt, historial)
            respuesta = re.sub(r'<think>.*?</think>', '', respuesta, flags=re.DOTALL).strip()

            vision_matches = re.findall(r'VISION:([^\n`]+)', respuesta)
            searches = re.findall(r'`?SEARCH:([^`\n]+)`?', respuesta)

            if vision_matches:
                contexto = ""
                for pregunta in vision_matches:
                    resultado = ver_pantalla(pregunta.strip())
                    contexto += f"Descripción visual de la pantalla: {resultado}\n"
                historial.pop()
                historial.pop()
                respuesta, historial = pensar(prompt, historial, contexto_web=contexto)
                respuesta = re.sub(r'<think>.*?</think>', '', respuesta, flags=re.DOTALL).strip()
                respuesta = ejecutar_comando(respuesta)
            elif searches:
                contexto = ""
                for q in searches:
                    contexto += buscar_web(q.strip()) + "\n"
                historial.pop()
                historial.pop()
                respuesta, historial = pensar(prompt, historial, contexto_web=contexto)
                respuesta = re.sub(r'<think>.*?</think>', '', respuesta, flags=re.DOTALL).strip()
                respuesta = ejecutar_comando(respuesta)
            else:
                respuesta = ejecutar_comando(respuesta)

            guardar_historial(historial)
            hablar(respuesta)

        except KeyboardInterrupt:
            toast("Shinobu", "Apagada", tipo="warning", duracion=2000)
            break


if __name__ == "__main__":
    main()
