local M = {}

function M.setup()
  require('base16-colorscheme').setup {
    base00 = '#1b1017',
    base01 = '#281c23',
    base02 = '#33262e',
    base03 = '#a58999',
    base04 = '#ddbecf',
    base05 = '#f2dde7',
    base06 = '#f2dde7',
    base07 = '#f2dde7',
    base08 = '#ffb4ab',
    base09 = '#f8b1dd',
    base0A = '#c9bfff',
    base0B = '#c9bfff',
    base0C = '#f8b1dd',
    base0D = '#c9bfff',
    base0E = '#c9bfff',
    base0F = '#93000a',
  }
end

-- Recarga el tema cuando Noctalia cambia colores (señal SIGUSR1)
local signal = vim.uv.new_signal()
signal:start(
  'sigusr1',
  vim.schedule_wrap(function()
    package.loaded['matugen'] = nil
    require('matugen').setup()
  end)
)

return M
