return {
    {
        "nvim-treesitter/nvim-treesitter",
        branch = "main",
        build = ":TSUpdate",
        lazy = false,
        config = function()
            local treesitter = require("nvim-treesitter")

            treesitter.setup({
                install_dir = vim.fn.stdpath("data") .. "/site",
            })

            treesitter.install({
                "lua",
                "vim",
                "vimdoc",
                "bash",
                "fish",
                "python",
                "c",
                "cpp",
                "c_sharp",
                "html",
                "css",
                "javascript",
                "typescript",
                "json",
                "yaml",
                "markdown",
                "markdown_inline",
            })

            vim.api.nvim_create_autocmd("FileType", {
                callback = function(args)
                    local ok, parser = pcall(vim.treesitter.get_parser, args.buf)
                    if ok and parser then
                        vim.treesitter.start(args.buf)
                    end
                end,
            })
        end,
    },
}
