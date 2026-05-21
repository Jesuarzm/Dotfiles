local map = vim.keymap.set

-- #######################################################################################
-- GENERAL
-- #######################################################################################

map("n", "<leader>w", "<cmd>w<cr>", { desc = "Guardar archivo" })
map("n", "<leader>q", "<cmd>q<cr>", { desc = "Cerrar ventana" })
map("n", "<leader>Q", "<cmd>qa<cr>", { desc = "Salir de Neovim" })
map("n", "<leader>nh", "<cmd>nohlsearch<cr>", { desc = "Quitar resaltado de búsqueda" })

-- Guardar con Ctrl+S
map({ "n", "i", "v" }, "<C-s>", "<cmd>w<cr><esc>", { desc = "Guardar archivo" })

-- Seleccionar todo
map("n", "<leader>a", "ggVG", { desc = "Seleccionar todo" })

-- Copiar al clipboard del sistema
map({ "n", "v" }, "<leader>y", '"+y', { desc = "Copiar al portapapeles" })
map("n", "<leader>Y", '"+Y', { desc = "Copiar línea al portapapeles" })
map({ "n", "v" }, "<leader>p", '"+p', { desc = "Pegar desde portapapeles" })


-- #######################################################################################
-- SPLITS / VENTANAS
-- #######################################################################################

map("n", "<C-h>", "<C-w>h", { desc = "Mover foco izquierda" })
map("n", "<C-j>", "<C-w>j", { desc = "Mover foco abajo" })
map("n", "<C-k>", "<C-w>k", { desc = "Mover foco arriba" })
map("n", "<C-l>", "<C-w>l", { desc = "Mover foco derecha" })

map("n", "<leader>sv", "<cmd>vsplit<cr>", { desc = "Split vertical" })
map("n", "<leader>sh", "<cmd>split<cr>", { desc = "Split horizontal" })
map("n", "<leader>sx", "<cmd>close<cr>", { desc = "Cerrar split" })
map("n", "<leader>se", "<C-w>=", { desc = "Igualar tamaño splits" })

-- Redimensionar splits
map("n", "<C-Up>", "<cmd>resize +2<cr>", { desc = "Aumentar alto split" })
map("n", "<C-Down>", "<cmd>resize -2<cr>", { desc = "Reducir alto split" })
map("n", "<C-Left>", "<cmd>vertical resize -2<cr>", { desc = "Reducir ancho split" })
map("n", "<C-Right>", "<cmd>vertical resize +2<cr>", { desc = "Aumentar ancho split" })


-- #######################################################################################
-- BUFFERS
-- #######################################################################################

map("n", "<S-l>", "<cmd>bnext<cr>", { desc = "Siguiente buffer" })
map("n", "<S-h>", "<cmd>bprevious<cr>", { desc = "Buffer anterior" })
map("n", "<leader>bd", "<cmd>bdelete<cr>", { desc = "Cerrar buffer" })
map("n", "<leader>bn", "<cmd>enew<cr>", { desc = "Nuevo buffer" })


-- #######################################################################################
-- MOVER LÍNEAS
-- #######################################################################################

map("n", "<A-j>", ":m .+1<cr>==", { desc = "Mover línea abajo" })
map("n", "<A-k>", ":m .-2<cr>==", { desc = "Mover línea arriba" })
map("v", "<A-j>", ":m '>+1<cr>gv=gv", { desc = "Mover selección abajo" })
map("v", "<A-k>", ":m '<-2<cr>gv=gv", { desc = "Mover selección arriba" })


-- #######################################################################################
-- EXPLORADOR / TELESCOPE
-- #######################################################################################

map("n", "<leader>e", "<cmd>Neotree toggle<cr>", { desc = "Explorador de archivos" })
map("n", "<leader>E", "<cmd>Neotree reveal<cr>", { desc = "Revelar archivo actual" })

map("n", "<leader>ff", "<cmd>Telescope find_files<cr>", { desc = "Buscar archivos" })
map("n", "<leader>fg", "<cmd>Telescope live_grep<cr>", { desc = "Buscar texto" })
map("n", "<leader>fb", "<cmd>Telescope buffers<cr>", { desc = "Buffers" })
map("n", "<leader>fh", "<cmd>Telescope help_tags<cr>", { desc = "Ayuda" })
map("n", "<leader>fr", "<cmd>Telescope oldfiles<cr>", { desc = "Archivos recientes" })
map("n", "<leader>fc", "<cmd>Telescope grep_string<cr>", { desc = "Buscar palabra bajo cursor" })


-- #######################################################################################
-- DIAGNÓSTICOS
-- #######################################################################################

map("n", "<leader>dd", vim.diagnostic.open_float, { desc = "Mostrar diagnóstico" })
map("n", "<leader>dl", "<cmd>Trouble diagnostics toggle<cr>", { desc = "Lista de diagnósticos" })
map("n", "[d", vim.diagnostic.goto_prev, { desc = "Diagnóstico anterior" })
map("n", "]d", vim.diagnostic.goto_next, { desc = "Diagnóstico siguiente" })


-- #######################################################################################
-- TERMINAL INTEGRADA
-- #######################################################################################

map("n", "<leader>tt", "<cmd>terminal<cr>", { desc = "Abrir terminal" })
map("t", "<Esc><Esc>", "<C-\\><C-n>", { desc = "Salir de modo terminal" })


-- #######################################################################################
-- FORMATO
-- #######################################################################################

map("n", "<leader>fm", function()
    require("conform").format({ async = true, lsp_fallback = true })
end, { desc = "Formatear archivo" })


-- #######################################################################################
-- EJECUTAR ARCHIVOS RÁPIDAMENTE
-- #######################################################################################

map("n", "<leader>rp", "<cmd>w<cr><cmd>!python %<cr>", { desc = "Ejecutar Python" })
map("n", "<leader>rb", "<cmd>w<cr><cmd>!bash %<cr>", { desc = "Ejecutar Bash" })
map("n", "<leader>rf", "<cmd>w<cr><cmd>!fish %<cr>", { desc = "Ejecutar Fish" })
map("n", "<leader>rc", "<cmd>w<cr><cmd>!gcc % -o /tmp/nvim_run && /tmp/nvim_run<cr>", { desc = "Compilar/Ejecutar C" })
map("n", "<leader>rC", "<cmd>w<cr><cmd>!g++ % -o /tmp/nvim_run && /tmp/nvim_run<cr>", { desc = "Compilar/Ejecutar C++" })


-- #######################################################################################
-- LSP
-- #######################################################################################
-- Los LSP binds principales se cargan en LspAttach dentro de plugins/lsp.lua:
-- gd, gD, gr, gi, K, <leader>rn, <leader>ca, <leader>df, [d, ]d
