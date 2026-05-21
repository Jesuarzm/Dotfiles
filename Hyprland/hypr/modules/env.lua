-- #######################################################################################
-- ENVIRONMENT VARIABLES
-- Note: si usas uwsm, pon las vars en ~/.config/uwsm/env-hyprland en vez de aqui
-- #######################################################################################

hl.env("LIBVA_DRIVER_NAME",         "nvidia")
hl.env("__GLX_VENDOR_LIBRARY_NAME", "nvidia")
hl.env("GBM_BACKEND",               "nvidia-drm")
hl.env("QT_QPA_PLATFORM",           "wayland")
hl.env("QT_QPA_PLATFORMTHEME",      "qt6ct")
hl.env("XDG_CURRENT_DESKTOP",       "Hyprland")
hl.env("XDG_SESSION_TYPE",          "wayland")
hl.env("XCURSOR_SIZE",              "24")
hl.env("HYPRCURSOR_SIZE",           "24")
hl.env("XCURSOR_THEME",             "Bibata-Modern-Ice")
hl.env("HYPRCURSOR_THEME",          "Bibata-Modern-Ice")
