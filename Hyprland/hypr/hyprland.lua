-- #######################################################################################
-- HYPRLAND 0.55+ CONFIG (Lua)
-- ROG Strix G16 | CachyOS | Noctalia Shell
-- #######################################################################################

require("modules/env")
require("modules/monitors")
require("modules/look")
require("modules/input")
require("modules/autostart")
require("modules/keybinds")
require("modules/windowrules")
require("noctalia/noctalia-colors")

-- This loads Noctalia-generated Hyprland colors.
dofile("/home/jesuar/.config/hypr/noctalia/noctalia-colors.lua")
