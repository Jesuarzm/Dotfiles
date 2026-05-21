-- #######################################################################################
-- WINDOW RULES — HYPRLAND 0.55+ (Lua)
-- #######################################################################################

-- ###########################
-- GLOBAL FIXES
-- ###########################

hl.window_rule({ name = "xwayland-fixes",  match = { xwayland = true }, immediate = true })
hl.window_rule({ name = "no-screenshare",  match = { title = ".*is sharing your screen.*" }, float = true, center = true })

-- ###########################
-- FILE PICKERS / PORTALS
-- ###########################

hl.window_rule({ name = "xdg-portal-gtk", match = { class = "xdg-desktop-portal-gtk" }, float = true, center = true, size = {860, 640} })
hl.window_rule({ name = "polkit-auth",    match = { class = "org.gnome.Polkit1.AuthenticationAgent" }, float = true, center = true, stay_focused = true, size = {420, 260} })

-- ###########################
-- TERMINALS
-- ###########################

hl.window_rule({ name = "kitty",      match = { class = "kitty" },                           float = true, size = {800, 500}, opacity = "0.95 override" })
hl.window_rule({ name = "nvim-kitty", match = { class = "kitty", title = ".*nvim.*" },       opacity = "1.0 override" })

-- ###########################
-- FILE MANAGERS
-- ###########################

hl.window_rule({ name = "nemo-home",       match = { class = "nemo", title = "Home" },       float = true, center = true })
hl.window_rule({ name = "nemo",            match = { class = "nemo" },                        workspace = "3", opacity = "0.95 override" })
hl.window_rule({ name = "nemo-properties", match = { class = "nemo", title = "Properties" }, float = true, center = true, size = {720, 520} })
hl.window_rule({ name = "nemo-open", match = { class = "nemo", title = "Open with" }, float = true, center = true, pin = true, size = {644, 536} })


-- ###########################
-- BROWSERS
-- ###########################

hl.window_rule({ name = "brave",   match = { class = "brave-browser" }, workspace = "2" })
hl.window_rule({ name = "firefox", match = { class = "firefox" },        workspace = "2" })
hl.window_rule({ name = "pip",     match = { title = "Picture-in-Picture" }, float = true, pin = true, size = {480, 270}, move = {"100%-500", "100%-320"} })
hl.window_rule({ name = "bitwaden",match = { class = "brave-nngceckbapebfimnlniiiahkandclblb-Default"}, float = true, center = true, pin = true, size = {790, 780} })

-- ###########################
-- COMMUNICATION
-- ###########################

hl.window_rule({ name = "discord",          match = { class = "discord|vesktop" },                               workspace = "7" })
hl.window_rule({ name = "telegram",         match = { class = "org.telegram.desktop" },                          workspace = "4" })
hl.window_rule({ name = "whatsapp",         match = { class = "whatsapp-for-linux" },                            workspace = "4" })
hl.window_rule({ name = "discord-settings", match = { class = "discord|vesktop", title = ".*Settings.*" },       float = true, center = true, size = {900, 650} })

-- ###########################
-- MULTIMEDIA
-- ###########################

hl.window_rule({ name = "spotify",  match = { class = "Spotify|spotify" }, workspace = "6" })
hl.window_rule({ name = "vlc",      match = { class = "vlc" },             float = true, center = true, size = {960, 540} })
hl.window_rule({ name = "affinity", match = { class = "affinity.exe" },    workspace = "4" })

-- ###########################
-- SYSTEM TOOLS
-- ###########################

hl.window_rule({ name = "pavucontrol", match = { class = "pavucontrol" },       float = true, center = true, size = {760, 520} })
hl.window_rule({ name = "pwvucontrol", match = { class = "com.saivert.pwvucontrol" },       float = true, center = true, size = {760, 520} })
hl.window_rule({ name = "blueman",     match = { class = "blueman-manager" },    float = true, center = true, size = {720, 520} })
hl.window_rule({ name = "nm-editor",   match = { class = "nm-connection-editor"},float = true, center = true, size = {760, 560} })
hl.window_rule({ name = "gparted",     match = { class = "gpartedbin" },         float = true, center = true, size = {1000, 700} })
hl.window_rule({ name = "rog-cc",      match = { class = "rog-control-center" }, float = true, center = true, size = {1000, 700} })

-- ###########################
-- PASSWORD / AUTH
-- ###########################

hl.window_rule({ name = "pinentry", match = { class = "pinentry-.*" }, float = true, center = true, stay_focused = true, size = {420, 240} })

-- ###########################
-- GAMES
-- ###########################

hl.window_rule({ name = "steam",        match = { class = "steam" },                            workspace = "5" })
hl.window_rule({ name = "steam-friends",match = { class = "steam", title = "Friends List" },    float = true, center = true, size = {420, 720} })
hl.window_rule({ name = "steam-games",  match = { class = "steam_app_.*" },                     immediate = true, fullscreen = true, no_blur = true, border_size = 0 })

-- ###########################
-- SCREENSHARE / OBS
-- ###########################

hl.window_rule({ name = "obs", match = { class = "com.obsproject.Studio" }, workspace = "8" })

-- ###########################
-- IMAGE VIEWERS
-- ###########################

hl.window_rule({ name = "image-viewers", match = { class = "imv|sxiv|qimgv|org.gnome.eog" }, float = true, center = true, size = {1200, 800} })

-- ###########################
-- FLOATING SMALL WINDOWS
-- ###########################

hl.window_rule({ name = "floating-small", match = { title = "About|Preferences|Settings|Confirm|Authentication Required" }, float = true, center = true })
hl.window_rule({ name = "mega",           match = { title = "MEGAsync" }, float = true })

-- ###########################
-- TERMINALS
-- ###########################


hl.window_rule({ name = "Remmina",           match = { class = "org.remmina.Remmina", title = "Remmina Remote Desktop Client" }, float = true, center = true, size = {1200,800} })
hl.window_rule({ name = "Remmina",           match = { class = "org.remmina.Remmina", title = "Latitude" }, workspace = "7"})
hl.window_rule({ name = "Remmina",           match = { class = "org.remmina.Remmina", title = "Remmina Remote Desktop Client" }, workspace = "8"})

