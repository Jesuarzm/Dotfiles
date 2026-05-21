-- #######################################################################################
-- LOOK AND FEEL
-- #######################################################################################

hl.config({
    render = {
        direct_scanout = true,
    },

    general = {
        gaps_in          = 5,
        gaps_out         = 20,
        border_size      = 2,
        col = {
            active_border   = { colors = {"rgba(33ccffee)", "rgba(00ff99ee)"}, angle = 45 },
            inactive_border = "rgba(595959aa)",
        },
        resize_on_border = false,
        allow_tearing    = false,
        layout           = "dwindle",
    },

    decoration = {
        rounding       = 10,
        active_opacity = 1.0,
        inactive_opacity = 1.0,
        shadow = {
            enabled      = true,
            range        = 8,
            render_power = 3,
        },
        blur = {
            enabled = true,
        },
    },

    animations = {
        enabled = true,
    },

    dwindle = {
        preserve_split = true,
    },

    master = {
        new_status = "master",
    },

    misc = {
        force_default_wallpaper = -1,
        disable_hyprland_logo   = true,
    },
})

-- Curvas de animación
hl.curve("easeOut", { type = "bezier", points = { {0.05, 0.9}, {0.1, 1.0} } })

hl.animation({ leaf = "windows",    enabled = true, speed = 4,  bezier = "easeOut" })
hl.animation({ leaf = "border",     enabled = true, speed = 5,  bezier = "easeOut" })
hl.animation({ leaf = "fade",       enabled = true, speed = 4,  bezier = "easeOut" })
hl.animation({ leaf = "workspaces", enabled = true, speed = 5,  bezier = "easeOut" })
