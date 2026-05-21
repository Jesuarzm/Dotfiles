-- #######################################################################################
-- KEYBINDS
-- #######################################################################################

local mainMod = "SUPER"
local altMod  = "ALT"

local terminal    = "kitty"
local fileManager = "nemo"
local browser     = "brave"
local ipc         = "qs -c noctalia-shell ipc call"
local touchpad    = "asuf1209:00-2808:0219-touchpad"

-- #########################
-- BASIC APPS
-- #########################

hl.bind(mainMod .. " + RETURN", hl.dsp.exec_cmd(terminal))
hl.bind(altMod  .. " + F",      hl.dsp.exec_cmd(fileManager))
hl.bind(altMod  .. " + W",      hl.dsp.exec_cmd(browser))
hl.bind(altMod  .. " + A",      hl.dsp.exec_cmd("spotify"))
hl.bind(altMod  .. " + V",      hl.dsp.exec_cmd("pwvucontrol"))


-- #########################
-- NOCTALIA SHELL
-- #########################

hl.bind(altMod  .. " + D",      hl.dsp.exec_cmd(ipc .. " launcher toggle"))
hl.bind(mainMod .. " + C",      hl.dsp.exec_cmd(ipc .. " controlCenter toggle"))
hl.bind(mainMod .. " + X",      hl.dsp.exec_cmd(ipc .. " settings toggle"))
hl.bind(mainMod .. " + L",      hl.dsp.exec_cmd(ipc .. " lockScreen lock"))
hl.bind(mainMod .. " + DELETE", hl.dsp.exec_cmd(ipc .. " sessionMenu toggle"))
hl.bind(mainMod .. " + Escape", hl.dsp.exec_cmd(ipc .. " systemMonitor toggle"))
hl.bind(mainMod .. " + P",      hl.dsp.exec_cmd(ipc .. " plugin:wallcards toggle"))
hl.bind(mainMod .. " + O",      hl.dsp.exec_cmd(os.getenv("HOME") .. "/.local/bin/shinobu-trigger"))

-- WINDOWS
-- #########################
-- #########################

hl.bind(mainMod .. " + Z",            hl.dsp.window.close())
hl.bind(mainMod .. " + SHIFT + Z",    hl.dsp.exec_cmd("hyprctl kill"))
hl.bind(mainMod .. " + A",            hl.dsp.window.float({ action = "toggle" }))
hl.bind(mainMod .. " + S",            hl.dsp.window.pseudo())
hl.bind(mainMod .. " + D",            hl.dsp.layout("togglesplit"))
hl.bind(mainMod .. " + F",            hl.dsp.window.fullscreen({ mode = 1 }))
hl.bind(mainMod .. " + SHIFT + F",    hl.dsp.window.fullscreen({ mode = 0 }))
hl.bind(mainMod .. " + G",            hl.dsp.exec_cmd("hyprctl dispatch togglegroup"))
hl.bind(altMod .. " + TAB",          hl.dsp.window.cycle_next())
hl.bind(altMod .. " + SHIFT + TAB",  hl.dsp.window.cycle_next({ prev = true }))


-- #########################
-- MOVE FOCUS
-- #########################

hl.bind(mainMod .. " + left",  hl.dsp.focus({ direction = "left" }))
hl.bind(mainMod .. " + right", hl.dsp.focus({ direction = "right" }))
hl.bind(mainMod .. " + up",    hl.dsp.focus({ direction = "up" }))
hl.bind(mainMod .. " + down",  hl.dsp.focus({ direction = "down" }))

-- #########################
-- MEDIA KEYS
-- #########################

hl.bind("XF86AudioRaiseVolume", hl.dsp.exec_cmd(ipc .. " volume increase"),  { locked = true, repeating = true })
hl.bind("XF86AudioLowerVolume", hl.dsp.exec_cmd(ipc .. " volume decrease"),  { locked = true, repeating = true })
hl.bind("XF86AudioMute",        hl.dsp.exec_cmd(ipc .. " volume muteOutput"),{ locked = true })
hl.bind("XF86AudioMicMute",     hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle"), { locked = true })
hl.bind("XF86MonBrightnessUp",  hl.dsp.exec_cmd(ipc .. " brightness increase"), { locked = true, repeating = true })
hl.bind("XF86MonBrightnessDown",hl.dsp.exec_cmd(ipc .. " brightness decrease"), { locked = true, repeating = true })
hl.bind("XF86AudioPlay",        hl.dsp.exec_cmd("playerctl play-pause"), { locked = true })
hl.bind("XF86AudioPause",       hl.dsp.exec_cmd("playerctl play-pause"), { locked = true })
hl.bind("XF86AudioNext",        hl.dsp.exec_cmd("playerctl next"),       { locked = true })
hl.bind("XF86AudioPrev",        hl.dsp.exec_cmd("playerctl previous"),   { locked = true })
hl.bind("XF86AudioStop",        hl.dsp.exec_cmd("playerctl stop"),       { locked = true })

-- Alt media
hl.bind(mainMod .. " + comma",  hl.dsp.exec_cmd("playerctl previous"))
hl.bind(mainMod .. " + period", hl.dsp.exec_cmd("playerctl next"))
hl.bind(mainMod .. " + slash",  hl.dsp.exec_cmd("playerctl play-pause"))

-- #########################
-- TOUCHPAD
-- #########################

hl.bind(mainMod .. " + Y", hl.dsp.exec_cmd(
    "bash -c 'STATE=/tmp/hypr_touchpad_disabled; DEV=\"" .. touchpad .. "\"; " ..
    "if [ -f \"$STATE\" ]; then hyprctl keyword \"device[$DEV]:enabled\" true && rm \"$STATE\" && notify-send \"Touchpad activado\"; " ..
    "else hyprctl keyword \"device[$DEV]:enabled\" false && touch \"$STATE\" && notify-send \"Touchpad desactivado\"; fi'"
))
hl.bind(mainMod .. " + CTRL + Y",  hl.dsp.exec_cmd("hyprctl keyword \"device[" .. touchpad .. "]:enabled\" true"))
hl.bind(mainMod .. " + SHIFT + Y", hl.dsp.exec_cmd("hyprctl keyword \"device[" .. touchpad .. "]:enabled\" false"))

-- #########################
-- SCREENSHOTS
-- #########################

local ssDir = os.getenv("HOME") .. "/Pictures/Screenshots"

hl.bind("Print",                   hl.dsp.exec_cmd("grim - | wl-copy && notify-send 'Captura copiada' 'Pantalla completa'"))
hl.bind(mainMod .. " + Print",     hl.dsp.exec_cmd("mkdir -p " .. ssDir .. " && grim \"" .. ssDir .. "/screenshot-$(date +%Y-%m-%d_%H-%M-%S).png\" && notify-send 'Captura guardada' '" .. ssDir .. "'"))
hl.bind(mainMod .. " + SHIFT + S", hl.dsp.exec_cmd("grim -g \"$(slurp)\" - | wl-copy && notify-send 'Captura copiada' 'Área seleccionada'"))
hl.bind(mainMod .. " + CTRL + S",  hl.dsp.exec_cmd("mkdir -p " .. ssDir .. " && grim -g \"$(slurp)\" \"" .. ssDir .. "/screenshot-$(date +%Y-%m-%d_%H-%M-%S).png\" && notify-send 'Captura guardada' '" .. ssDir .. "'"))
hl.bind(mainMod .. " + ALT + Print", hl.dsp.exec_cmd("grim -g \"$(hyprctl activewindow -j | jq -r '.at[0],.at[1],.size[0],.size[1]' | paste -sd ',' | awk -F, '{print $1\",\"$2\" \"$3\"x\"$4}')\" - | wl-copy && notify-send 'Captura copiada' 'Ventana activa'"))
hl.bind(mainMod .. " + CTRL + Print", hl.dsp.exec_cmd("mkdir -p " .. ssDir .. " && grim -g \"$(hyprctl activewindow -j | jq -r '.at[0],.at[1],.size[0],.size[1]' | paste -sd ',' | awk -F, '{print $1\",\"$2\" \"$3\"x\"$4}')\" \"" .. ssDir .. "/window-$(date +%Y-%m-%d_%H-%M-%S).png\" && notify-send 'Captura guardada' '" .. ssDir .. "'"))

-- #########################
-- SCRATCHPAD
-- #########################

hl.bind(mainMod .. " + grave",         hl.dsp.workspace.toggle_special("magic"))
hl.bind(mainMod .. " + SHIFT + grave", hl.dsp.window.move({ workspace = "special:magic" }))

-- #########################
-- WORKSPACES — Switch
-- #########################

hl.bind(mainMod .. " + 1", hl.dsp.focus({ workspace = 1 }))
hl.bind(mainMod .. " + 2", hl.dsp.focus({ workspace = 2 }))
hl.bind(mainMod .. " + 3", hl.dsp.focus({ workspace = 3 }))
hl.bind(mainMod .. " + 4", hl.dsp.focus({ workspace = 4 }))
hl.bind(mainMod .. " + 5", hl.dsp.focus({ workspace = 5 }))
hl.bind(mainMod .. " + Q", hl.dsp.focus({ workspace = 6 }))
hl.bind(mainMod .. " + W", hl.dsp.focus({ workspace = 7 }))
hl.bind(mainMod .. " + E", hl.dsp.focus({ workspace = 8 }))
hl.bind(mainMod .. " + R", hl.dsp.focus({ workspace = 9 }))
hl.bind(mainMod .. " + T", hl.dsp.focus({ workspace = 10 }))

-- #########################
-- WORKSPACES — Move
-- #########################

hl.bind(mainMod .. " + SHIFT + 1", hl.dsp.window.move({ workspace = 1 }))
hl.bind(mainMod .. " + SHIFT + 2", hl.dsp.window.move({ workspace = 2 }))
hl.bind(mainMod .. " + SHIFT + 3", hl.dsp.window.move({ workspace = 3 }))
hl.bind(mainMod .. " + SHIFT + 4", hl.dsp.window.move({ workspace = 4 }))
hl.bind(mainMod .. " + SHIFT + 5", hl.dsp.window.move({ workspace = 5 }))
hl.bind(mainMod .. " + SHIFT + Q", hl.dsp.window.move({ workspace = 6 }))
hl.bind(mainMod .. " + SHIFT + W", hl.dsp.window.move({ workspace = 7 }))
hl.bind(mainMod .. " + SHIFT + E", hl.dsp.window.move({ workspace = 8 }))
hl.bind(mainMod .. " + SHIFT + R", hl.dsp.window.move({ workspace = 9 }))
hl.bind(mainMod .. " + SHIFT + T", hl.dsp.window.move({ workspace = 10 }))

-- #########################
-- MOUSE
-- #########################

hl.bind(mainMod .. " + mouse:272", hl.dsp.window.drag(),   { mouse = true })
hl.bind(mainMod .. " + mouse:273", hl.dsp.window.resize(), { mouse = true })
