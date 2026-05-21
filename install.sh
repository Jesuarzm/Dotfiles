#!/usr/bin/env bash
# =============================================================================
#  install.sh — Jesuar's CachyOS / Hyprland Setup Script
#  Generado desde zsh_history. Revisar secciones antes de ejecutar.
# =============================================================================

set -e

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_DIR="$HOME/.config"
LOCAL_BIN="$HOME/.local/bin"
LOCAL_SHARE="$HOME/.local/share"

echo "╔══════════════════════════════════════════╗"
echo "║   Jesuar's Dotfiles — Install Script     ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# ─────────────────────────────────────────────
# 0. AUR Helper (paru)
# ─────────────────────────────────────────────
install_paru() {
    if ! command -v paru &>/dev/null; then
        echo "[paru] Instalando paru..."
        sudo pacman -S --needed git base-devel
        git clone https://aur.archlinux.org/paru.git /tmp/paru
        cd /tmp/paru && makepkg -si --noconfirm && cd -
    else
        echo "[paru] Ya instalado."
    fi
}

# ─────────────────────────────────────────────
# 1. Paquetes del sistema base
# ─────────────────────────────────────────────
install_base() {
    echo "[base] Instalando paquetes base..."
    sudo pacman -S --needed --noconfirm \
        git unzip ripgrep fd \
        grim slurp wl-clipboard jq libnotify \
        swayidle brightnessctl playerctl \
        ffmpeg imagemagick \
        python python-pip python-pipx \
        sbctl \
        timeshift \
        btop htop nvtop \
        sox \
        rust \
        autoconf automake base-devel \
        lzip \
        docker docker-compose \
        ollama \
        wlsunset \
        tree

    # Paquetes AUR
    paru -S --needed --noconfirm \
        mpvpaper \
        ntfs-3g \
        gnome-disk-utility \
        onedriver \
        pwvucontrol \
        pavucontrol \
        mint-l-icons \
        adw-gtk-theme \
        google-chrome \
        spicetify-cli \
        noctalia-shell-git \
        waydroid \
        sddm-silent-theme \
        piper-tts-bin \
        megasync \
        vlc \
        betterbird-bin
}

# ─────────────────────────────────────────────
# 2. Neovim y LSPs
# ─────────────────────────────────────────────
install_neovim_deps() {
    echo "[nvim] Instalando dependencias de Neovim..."
    sudo pacman -S --needed --noconfirm \
        nodejs npm \
        lua-language-server stylua \
        shfmt shellcheck \
        clang pyright \
        tree-sitter-cli \
        luarocks lua51 \
        ruff

    sudo npm install -g -y \
        typescript \
        typescript-language-server \
        vscode-langservers-extracted \
        prettier \
        bash-language-server
}

# ─────────────────────────────────────────────
# 3. Secure Boot con sbctl
# ─────────────────────────────────────────────
setup_secure_boot() {
    echo "[secureboot] Configurando Secure Boot..."
    sudo sbctl status
    sudo sbctl create-keys
    sudo sbctl enroll-keys -m
    sudo sbctl sign -s /boot/EFI/BOOT/BOOTX64.EFI
    sudo sbctl verify
    echo "[secureboot] Listo. Verifica con: sudo sbctl status"
}

# ─────────────────────────────────────────────
# 4. Docker — Ollama + Open-WebUI + SearXNG
# ─────────────────────────────────────────────
setup_docker_services() {
    echo "[docker] Configurando Docker..."
    sudo systemctl enable --now docker
    sudo usermod -aG docker "$USER"
    echo "[docker] Grupo docker añadido. Re-login necesario para aplicar."

    echo "[ollama] Instalando Ollama..."
    curl -fsSL https://ollama.com/install.sh | sh

    echo "[docker] Iniciando Open-WebUI..."
    docker run -d \
        --network=host \
        -v open-webui:/app/backend/data \
        -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
        --name open-webui \
        --restart always \
        ghcr.io/open-webui/open-webui:main

    echo "[docker] Iniciando SearXNG..."
    mkdir -p "$HOME/searxng"
    docker run -d \
        --name searxng \
        -p 8081:8080 \
        -v "$HOME/searxng/settings.yml:/etc/searxng/settings.yml" \
        --restart unless-stopped \
        searxng/searxng

    echo "[docker] Modelos Ollama recomendados:"
    echo "  ollama pull qwen3:8b"
    echo "  ollama pull moondream:1.8b"
}

# ─────────────────────────────────────────────
# 5. Waydroid con GApps
# ─────────────────────────────────────────────
setup_waydroid() {
    echo "[waydroid] Inicializando Waydroid con GApps..."
    sudo waydroid init -s GAPPS
    sudo systemctl enable --now waydroid-container

    # UFW para red de Waydroid
    sudo ufw allow 53
    sudo ufw allow 67
    sudo ufw default allow FORWARD
    sudo ufw reload

    # Deshabilitar multi-window y app integration
    waydroid prop set persist.waydroid.multi_windows false
    waydroid prop set persist.waydroid.app_integration false
    rm -f "$HOME/.local/share/applications/"*waydroid*
}

# ─────────────────────────────────────────────
# 6. Spicetify (Spotify theming)
# ─────────────────────────────────────────────
setup_spicetify() {
    echo "[spicetify] Configurando Spicetify..."
    mkdir -p "$HOME/kk"
    git clone --depth=1 https://github.com/spicetify/spicetify-themes.git "$HOME/kk/spicetify-themes" 2>/dev/null || true
    cp -r "$HOME/kk/spicetify-themes/"* "$HOME/.config/spicetify/Themes/"

    # Tema Comfy
    git clone https://github.com/Comfy-Themes/Spicetify.git "$HOME/.config/spicetify/Themes/ComfyRepo" 2>/dev/null || true
    cp -r "$HOME/.config/spicetify/Themes/ComfyRepo/Comfy" "$HOME/.config/spicetify/Themes/"

    sudo chmod a+wr /opt/spotify
    sudo chmod a+wr /opt/spotify/Apps -R

    spicetify config current_theme Comfy color_scheme Comfy
    spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
    spicetify backup apply
}

# ─────────────────────────────────────────────
# 7. Piper TTS (voz es_MX)
# ─────────────────────────────────────────────
setup_piper_tts() {
    echo "[piper] Descargando voz es_MX-claude-high..."
    mkdir -p "$LOCAL_SHARE/piper/voices"

    pipx install huggingface-hub 2>/dev/null || true

    hf download rhasspy/piper-voices \
        --repo-type model \
        --revision v1.0.0 \
        --local-dir "$LOCAL_SHARE/piper/voices" \
        --include "es/*"

    echo "[piper] Test de voz:"
    echo "Hola, soy tu asistente. ¿En qué puedo ayudarte?" | \
        piper-tts \
            --model "$LOCAL_SHARE/piper/voices/es/es_MX/claude/high/es_MX-claude-high.onnx" \
            --output_file /tmp/test_piper.wav && \
        aplay /tmp/test_piper.wav
}

# ─────────────────────────────────────────────
# 8. Sonidos USB con udev
# ─────────────────────────────────────────────
setup_usb_sounds() {
    echo "[usb-sound] Configurando sonidos USB..."
    mkdir -p "$LOCAL_SHARE/sounds/usb"
    mkdir -p "$LOCAL_BIN"

    # Copiar sonidos si existen en Downloads
    [ -f "$HOME/Downloads/usb-plug.wav" ] && \
        cp "$HOME/Downloads/usb-plug.wav" "$LOCAL_SHARE/sounds/usb/usb-connect.wav"
    [ -f "$HOME/Downloads/usb-unplug.wav" ] && \
        cp "$HOME/Downloads/usb-unplug.wav" "$LOCAL_SHARE/sounds/usb/usb-disconnect.wav"

    cat > "$LOCAL_BIN/usb-sound.sh" <<'SCRIPT'
#!/usr/bin/env bash
SOUND="$HOME/.local/share/sounds/usb/usb-connect.wav"
[ -f "$SOUND" ] && aplay "$SOUND" || paplay /usr/share/sounds/freedesktop/stereo/device-added.oga
SCRIPT
    chmod +x "$LOCAL_BIN/usb-sound.sh"

    cat > "$LOCAL_BIN/usb-remove-sound.sh" <<'SCRIPT'
#!/usr/bin/env bash
SOUND="$HOME/.local/share/sounds/usb/usb-disconnect.wav"
[ -f "$SOUND" ] && aplay "$SOUND" || paplay /usr/share/sounds/freedesktop/stereo/device-removed.oga
SCRIPT
    chmod +x "$LOCAL_BIN/usb-remove-sound.sh"

    echo "[usb-sound] Scripts creados. Configura /etc/udev/rules.d/99-usb-sound.rules manualmente."
}

# ─────────────────────────────────────────────
# 9. Timeshift (backups)
# ─────────────────────────────────────────────
setup_timeshift() {
    echo "[timeshift] Configurando Timeshift..."
    sudo pacman -S --needed --noconfirm timeshift
    sudo systemctl enable --now cronie.service
    sudo systemctl enable --now timeshift.timer
}

# ─────────────────────────────────────────────
# 10. Swap en NVMe (desactivar zram)
# ─────────────────────────────────────────────
setup_swap() {
    echo "[swap] Configurando swap en NVMe..."
    echo "ATENCIÓN: Ajusta el dispositivo (/dev/nvme1n1p4) según tu partición."
    read -rp "¿Continuar con /dev/nvme1n1p4? [s/N] " confirm
    [[ "$confirm" =~ ^[sS]$ ]] || return

    sudo mkswap -L swap /dev/nvme1n1p4
    sudo swapoff /dev/zram0 2>/dev/null || true
    sudo swapon /dev/nvme1n1p4
    sudo systemctl disable --now systemd-zram-setup@zram0.service
    echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swap.conf
    sudo sysctl vm.swappiness=10
    echo "[swap] Agrega a /etc/fstab la línea del UUID de tu partición swap."
}

# ─────────────────────────────────────────────
# 11. Dotfiles — copiar configs
# ─────────────────────────────────────────────
install_dotfiles() {
    echo "[dotfiles] Instalando configs..."
    mkdir -p "$CONFIG_DIR"

    # Hyprland
    if [ -d "$DOTFILES_DIR/Hyprland/hypr" ]; then
        cp -r "$DOTFILES_DIR/Hyprland/hypr" "$CONFIG_DIR/"
        echo "  ✓ hypr"
    fi

    # Noctalia-shell
    if [ -d "$DOTFILES_DIR/Hyprland/quickshell" ]; then
        cp -r "$DOTFILES_DIR/Hyprland/quickshell" "$CONFIG_DIR/"
        echo "  ✓ noctalia-shell (quickshell)"
    fi

    # Otros configs
    for dir in waybar kitty dunst starship nvim wireplumber pipewire spicetify paru; do
        if [ -d "$DOTFILES_DIR/Hyprland/$dir" ]; then
            cp -r "$DOTFILES_DIR/Hyprland/$dir" "$CONFIG_DIR/"
            echo "  ✓ $dir"
        fi
    done

    # Scripts locales
    if [ -d "$DOTFILES_DIR/scripts" ]; then
        mkdir -p "$LOCAL_BIN"
        cp -r "$DOTFILES_DIR/scripts/"* "$LOCAL_BIN/"
        chmod +x "$LOCAL_BIN/"*
        echo "  ✓ scripts → $LOCAL_BIN"
    fi
}

# ─────────────────────────────────────────────
# 12. Fuentes
# ─────────────────────────────────────────────
install_fonts() {
    echo "[fonts] Instalando fuentes..."
    paru -S --needed --noconfirm ttf-jetbrains-mono-nerd ttf-font-awesome

    # Fuentes manuales en Downloads
    for font in Montserrat-SemiBold Rajdhani; do
        if [ -d "$HOME/Downloads/$font" ]; then
            sudo cp -r "$HOME/Downloads/$font" /usr/share/fonts/
            echo "  ✓ $font"
        fi
    done

    fc-cache -fv
    echo "[fonts] Cache de fuentes actualizado."
}

# ─────────────────────────────────────────────
# 13. Shinobu (asistente de voz — servicio user)
# ─────────────────────────────────────────────
setup_shinobu() {
    echo "[shinobu] Configurando servicio Shinobu..."
    mkdir -p "$HOME/.config/systemd/user"
    mkdir -p "$LOCAL_SHARE/jarvis"

    # Entorno virtual para Shinobu/Jarvis
    python -m venv "$LOCAL_SHARE/jarvis/venv"
    "$LOCAL_SHARE/jarvis/venv/bin/pip" install --quiet \
        requests playwright openai-whisper

    "$LOCAL_SHARE/jarvis/venv/bin/playwright" install chromium

    if [ -f "$DOTFILES_DIR/scripts/shinobu.py" ]; then
        cp "$DOTFILES_DIR/scripts/shinobu.py" "$LOCAL_BIN/shinobu.py"
        chmod +x "$LOCAL_BIN/shinobu.py"
    fi

    if [ -f "$DOTFILES_DIR/scripts/shinobu.service" ]; then
        cp "$DOTFILES_DIR/scripts/shinobu.service" "$HOME/.config/systemd/user/"
        systemctl --user daemon-reload
        systemctl --user enable --now shinobu
        echo "[shinobu] Servicio habilitado."
    else
        echo "[shinobu] AVISO: shinobu.service no encontrado en scripts/. Configúralo manualmente."
    fi
}

# ─────────────────────────────────────────────
# Menú interactivo
# ─────────────────────────────────────────────
main() {
    echo "Selecciona qué instalar (separado por espacios, o 'all'):"
    echo ""
    echo "  1)  paru (AUR helper)"
    echo "  2)  Paquetes base del sistema"
    echo "  3)  Neovim LSPs y herramientas"
    echo "  4)  Secure Boot (sbctl)"
    echo "  5)  Docker + Ollama + Open-WebUI + SearXNG"
    echo "  6)  Waydroid + GApps"
    echo "  7)  Spicetify"
    echo "  8)  Piper TTS (voz es_MX)"
    echo "  9)  Sonidos USB (udev)"
    echo "  10) Timeshift"
    echo "  11) Swap en NVMe"
    echo "  12) Dotfiles (copiar configs)"
    echo "  13) Fuentes"
    echo "  14) Shinobu (asistente de voz)"
    echo "  all) Todo lo anterior"
    echo ""
    read -rp "→ Opción(es): " choices

    [[ "$choices" == "all" ]] && choices="1 2 3 4 5 6 7 8 9 10 11 12 13 14"

    for choice in $choices; do
        case "$choice" in
            1)  install_paru ;;
            2)  install_base ;;
            3)  install_neovim_deps ;;
            4)  setup_secure_boot ;;
            5)  setup_docker_services ;;
            6)  setup_waydroid ;;
            7)  setup_spicetify ;;
            8)  setup_piper_tts ;;
            9)  setup_usb_sounds ;;
            10) setup_timeshift ;;
            11) setup_swap ;;
            12) install_dotfiles ;;
            13) install_fonts ;;
            14) setup_shinobu ;;
            *)  echo "Opción '$choice' no reconocida, ignorando." ;;
        esac
    done

    echo ""
    echo "✓ Instalación completada."
    echo "  Recuerda hacer re-login si añadiste grupos (docker, libvirt, kvm)."
}

main
