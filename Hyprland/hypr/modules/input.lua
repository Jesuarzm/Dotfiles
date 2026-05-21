-- #######################################################################################
-- INPUT
-- #######################################################################################

local touchpad = "asuf1209:00-2808:0219-touchpad"

hl.config({
    input = {
        kb_layout  = "us,es",
        kb_options = "grp:alt_shift_toggle",
        follow_mouse     = 1,
        sensitivity      = 0,
        numlock_by_default = true,
        touchpad = {
            natural_scroll       = false,
            disable_while_typing = true,
            tap_to_click        = true,
        },
    },
})

hl.gesture({ fingers = 3, direction = "horizontal", action = "workspace" })
