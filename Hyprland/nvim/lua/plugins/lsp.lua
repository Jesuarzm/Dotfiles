return {
    {
        "neovim/nvim-lspconfig",
        config = function()
            local servers = {
                "lua_ls",
                "pyright",
                "clangd",
                "bashls",
                "html",
                "cssls",
                "jsonls",
                "ts_ls",
            }

            for _, server in ipairs(servers) do
                vim.lsp.enable(server)
            end

            vim.api.nvim_create_autocmd("LspAttach", {
                callback = function(event)
                    local map = function(mode, lhs, rhs, desc)
                        vim.keymap.set(mode, lhs, rhs, {
                            buffer = event.buf,
                            desc = desc,
                        })
                    end

                    map("n", "gd", vim.lsp.buf.definition, "Ir a definición")
                    map("n", "gD", vim.lsp.buf.declaration, "Ir a declaración")
                    map("n", "gr", vim.lsp.buf.references, "Referencias")
                    map("n", "gi", vim.lsp.buf.implementation, "Implementación")
                    map("n", "K", vim.lsp.buf.hover, "Documentación")
                    map("n", "<leader>rn", vim.lsp.buf.rename, "Renombrar")
                    map({ "n", "v" }, "<leader>ca", vim.lsp.buf.code_action, "Acción de código")
                    map("n", "<leader>df", vim.diagnostic.open_float, "Diagnóstico flotante")
                    map("n", "[d", vim.diagnostic.goto_prev, "Diagnóstico anterior")
                    map("n", "]d", vim.diagnostic.goto_next, "Diagnóstico siguiente")
                end,
            })
        end,
    },
    {
        "stevearc/conform.nvim",
        opts = {
            formatters_by_ft = {
                lua = { "stylua" },
                sh = { "shfmt" },
                bash = { "shfmt" },
                fish = { "fish_indent" },
                python = { "ruff_format" },
                c = { "clang_format" },
                cpp = { "clang_format" },
                csharp = { "csharpier" },
                html = { "prettier" },
                css = { "prettier" },
                javascript = { "prettier" },
                typescript = { "prettier" },
                json = { "prettier" },
                yaml = { "prettier" },
                markdown = { "prettier" },
            },
            format_on_save = {
                timeout_ms = 1000,
                lsp_fallback = true,
            },
        },
        keys = {
            {
                "<leader>fm",
                function()
                    require("conform").format({ async = true, lsp_fallback = true })
                end,
                desc = "Formatear archivo",
            },
        },
    },
}
