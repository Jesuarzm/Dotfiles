return {
    {
        "nvim-telescope/telescope.nvim",
        dependencies = { "nvim-lua/plenary.nvim" },
        opts = {
            defaults = {
                layout_strategy = "horizontal",
                layout_config = {
                    width = 0.9,
                    height = 0.85,
                    preview_width = 0.55,
                },
                sorting_strategy = "ascending",
                prompt_prefix = "  ",
                selection_caret = "❯ ",
            },
        },
    },
}
