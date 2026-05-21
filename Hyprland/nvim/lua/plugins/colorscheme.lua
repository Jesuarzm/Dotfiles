return {
    {
        "folke/tokyonight.nvim",
        lazy = false,
        opts = {
            style = "storm",
            transparent = false,
            terminal_colors = true,
            styles = {
                comments = { italic = true },
                keywords = { italic = false },
                functions = {},
                variables = {},
            },
        },
        config = function(_, opts)
            require("tokyonight").setup(opts)
            vim.cmd.colorscheme("tokyonight")
        end,
    },
    {
    'RRethy/base16-nvim',
    lazy = false,
    priority = 1000,
    config = function()
      require('matugen').setup()
    end,
  },
}
