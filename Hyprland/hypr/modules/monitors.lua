-- #######################################################################################
-- MONITORS
-- #######################################################################################

-- Monitor laptop (pantalla interna)
hl.monitor({
    output   = "desc:BOE NE160WUM-NXA",
    mode     = "1920x1200@165",
    position = "0x0",
    scale    = 1,
    vrr      = 0,
})

-- Monitor externo KTC
hl.monitor({
    output   = "desc:Shenzhen KTC Technology Group MOX-150",
    mode     = "1920x1080@144",
    position = "1920x0",
    scale    = 1,
    vrr      = 0,
})

-- Workspaces en monitor externo KTC
hl.workspace_rule({ workspace = "1",  monitor = "desc:Shenzhen KTC Technology Group MOX-150", default = true, persistent = true })
hl.workspace_rule({ workspace = "2",  monitor = "desc:Shenzhen KTC Technology Group MOX-150" })
hl.workspace_rule({ workspace = "3",  monitor = "desc:Shenzhen KTC Technology Group MOX-150" })
hl.workspace_rule({ workspace = "4",  monitor = "desc:Shenzhen KTC Technology Group MOX-150" })
hl.workspace_rule({ workspace = "5",  monitor = "desc:Shenzhen KTC Technology Group MOX-150" })

-- Workspaces en pantalla laptop
hl.workspace_rule({ workspace = "6",  monitor = "desc:BOE NE160WUM-NXA" })
hl.workspace_rule({ workspace = "7",  monitor = "desc:BOE NE160WUM-NXA" })
hl.workspace_rule({ workspace = "8",  monitor = "desc:BOE NE160WUM-NXA" })
hl.workspace_rule({ workspace = "9",  monitor = "desc:BOE NE160WUM-NXA" })
hl.workspace_rule({ workspace = "10", monitor = "desc:BOE NE160WUM-NXA" })
