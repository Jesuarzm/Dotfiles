<div align="center">

<img src="https://avatars.githubusercontent.com/u/102948200?v=4" width="100" style="border-radius:50%"/>

# ~ Jesuar's Dotfiles ~

**CachyOS · Hyprland · Noctalia-Shell**

</div>

---

## Setup actual

| | |
|---|---|
| **OS** | [CachyOS](https://cachyos.org) (Arch-based) |
| **WM** | [Hyprland](https://hyprland.org) (config en Lua) |
| **Shell** | [Noctalia-Shell](https://github.com/notnoctalia/noctalia-shell) via Quickshell |
| **Terminal** | [Kitty](https://sw.kovidgoyal.net/kitty/) |
| **Editor** | [Neovim](https://neovim.io) (LazyVim) |
| **Browser** | [Brave](https://brave.com) + [Google Chrome](https://google.com/chrome) |
| **File Manager** | [Nemo](https://github.com/linuxmint/nemo) |
| **Audio** | PipeWire + WirePlumber + [JamesDSP](https://github.com/ThePBone/JamesDSP4Linux) |
| **Notificaciones** | Noctalia-Shell (integrado) |
| **Launcher** | Noctalia-Shell (integrado) |
| **Música** | Spotify + [Spicetify](https://spicetify.app) (tema Comfy) |
| **Hardware** | ASUS ROG Strix G16 2025 (G615JMR) · NVIDIA RTX 4060 |

---

## Estructura del repo

```
Dotfiles/
├── Hyprland/
│   ├── hypr/           # Config Hyprland (Lua + hyprlang)
│   ├── quickshell/     # Noctalia-Shell config
│   ├── kitty/
│   ├── nvim/
│   ├── waybar/         # (si aplica)
│   └── ...
├── scripts/            # Scripts locales (~/.local/bin)
│   ├── shinobu.py      # Asistente de voz (Whisper + Ollama + Piper)
│   ├── usb-sound.sh
│   └── usb-remove-sound.sh
├── install.sh          # Script de instalación automatizado
└── README.md
```

---

## Instalación rápida

```bash
git clone https://github.com/Jesuarzm/Dotfiles.git
cd Dotfiles
chmod +x install.sh
./install.sh
```

El script tiene menú interactivo — podés elegir instalar todo o solo lo que necesitás.

---

## Lo que instala / configura

- **Base:** paru, herramientas CLI (ripgrep, fd, grim, slurp, etc.)
- **Hyprland:** config modular en Lua con Noctalia-Shell
- **Neovim:** LazyVim con LSPs (TypeScript, Python, Lua, Bash, C/C++)
- **Secure Boot:** sbctl con llaves propias
- **Docker stack:** Ollama + Open-WebUI + SearXNG (IA local)
- **Waydroid:** Android con GApps
- **Spicetify:** tema Comfy para Spotify
- **Piper TTS:** voz es_MX para Shinobu
- **Shinobu:** asistente de voz local (Whisper STT → Ollama → Piper TTS)
- **Sonidos USB:** udev + scripts de audio al conectar/desconectar
- **Timeshift:** backups automáticos con cronie
- **Swap NVMe:** swap en partición real, zram desactivado
- **Fuentes:** JetBrainsMono Nerd, Font Awesome, Montserrat, Rajdhani

---

## Notas importantes

> **Kernel:** Se recomienda kernel **6.18 LTS** de CachyOS. El 6.19 tiene una regresión con los speakers internos del ROG G16.

> **NVIDIA:** El setup usa modo híbrido (iGPU por defecto, `prime-run` para GPU dedicada).

> **Ollama modelos usados:**
> ```bash
> ollama pull qwen3:8b       # LLM principal para Shinobu
> ollama pull moondream:1.8b # Vision (screen awareness)
> ```

---

## Shinobu — Asistente de voz local

Asistente en Python que corre como servicio de usuario (`systemctl --user`):

```
Micrófono → Whisper (STT) → Ollama/qwen3:8b (LLM) → Piper TTS (voz) → Speakers
```

Activación con keybind desde Hyprland. Integrado con Noctalia-Shell via IPC para notificaciones (`toast`).

---

<div align="center">
<a href="LICENSE"><img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=GPL-3.0&logoColor=eceff4&colorA=1e2327&colorB=5e81ac"/></a>
</div>
