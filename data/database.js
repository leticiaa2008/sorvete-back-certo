// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos do cardápio da sorveteria.
let categorias = [
    { id: 1, nome: 'Sorvetes' },
    { id: 2, nome: 'Milkshakes' },
    { id: 3, nome: 'Bebidas' },
    { id: 4, nome: 'Sobremesas' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    // --- SORVETES (Categoria 1) ---
    {
        id: 1,
        categoriaId: 1,
        nome: 'Casquinha Simples',
        descricao: '1 bola de sorvete artesanal servido em casquinha crocante.',
        preco: 6.00,
        imagem: './images/casquinha.webp'
    },
    {
        id: 2,
        categoriaId: 1,
        nome: 'Casquinha Dupla',
        descricao: 'Duas bolas de sorvete com sabores à escolha.',
        preco: 9.00,
        imagem: './images/casquinhadupla.webp'
    },
    {
        id: 3,
        categoriaId: 1,
        nome: 'Copo 3 Sabores',
        descricao: 'Escolha até três sabores diferentes de sorvete artesanal.',
        preco: 12.00,
        imagem: './images/sorvetecopo.webp'
    },
    {
        id: 4,
        categoriaId: 1,
        nome: 'Banana Split',
        descricao: 'Banana, três bolas de sorvete, calda de chocolate e chantilly.',
        preco: 18.00,
        imagem: './images/banana.webp'
    },

    // --- MILKSHAKES (Categoria 2) ---
    {
        id: 5,
        categoriaId: 2,
        nome: 'Milkshake Chocolate',
        descricao: 'Sorvete de chocolate batido com leite e calda cremosa.',
        preco: 14.00,
        imagem: './images/milkchocolate.webp'
    },
    {
        id: 6,
        categoriaId: 2,
        nome: 'Milkshake Morango',
        descricao: 'Sorvete de morango batido com leite e pedaços da fruta.',
        preco: 14.00,
        imagem: './images/milkmorango.webp'
    },
    {
        id: 7,
        categoriaId: 2,
        nome: 'Milkshake Ovomaltine',
        descricao: 'Milkshake cremoso com sorvete de creme e Ovomaltine.',
        preco: 16.00,
        imagem: './images/milkovo.webp'
    },

    // --- BEBIDAS (Categoria 3) ---
    {
        id: 8,
        categoriaId: 3,
        nome: 'Refrigerante',
        descricao: 'Lata 350ml – Coca, Guaraná ou Fanta.',
        preco: 7.00,
        imagem: './images/refri.webp'
    },
    {
        id: 9,
        categoriaId: 3,
        nome: 'Suco Natural',
        descricao: 'Suco natural de laranja, maracujá ou morango.',
        preco: 10.00,
        imagem: './images/suco.webp'
    },
    {
        id: 10,
        categoriaId: 3,
        nome: 'Água',
        descricao: 'Água mineral sem gás 500ml.',
        preco: 4.00,
        imagem: './images/agua.webp'
    },

    // --- SOBREMESAS (Categoria 4) ---
    {
        id: 11,
        categoriaId: 4,
        nome: 'Petit Gateau',
        descricao: 'Bolo de chocolate quente com sorvete de creme.',
        preco: 20.00,
        imagem: './images/petit.webp'
    },
    {
        id: 12,
        categoriaId: 4,
        nome: 'Brownie com Sorvete',
        descricao: 'Brownie artesanal servido com bola de sorvete.',
        preco: 18.00,
        imagem: './images/brownie.webp'
    },
    {
        id: 13,
        categoriaId: 4,
        nome: 'Açaí 400ml',
        descricao: 'Açaí cremoso com granola e leite condensado.',
        preco: 16.00,
        imagem: './images/acai.webp'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
module.exports = { categorias, produtos };