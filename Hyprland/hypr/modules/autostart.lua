-- #######################################################################################
-- AUTOSTART
-- #######################################################################################

hl.on("hyprland.start", function()
    hl.exec_cmd("gnome-keyring-daemon --start --components=secrets")
    hl.exec_cmd("uwsm app -- qs -c noctalia-shell")
    hl.exec_cmd("/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1")
    hl.exec_cmd("uwsm app -- hyprswitch init")
    hl.exec_cmd("uwsm app -- rog-control-center")
    hl.exec_cmd("megasync")
    hl.exec_cmd("hyprdynamicmonitors run")
end)
