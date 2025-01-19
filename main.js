const receitas = [
    {
        id: 1,
        nome: "Farofa de feijão fradinha",
        descricao: "Receita tradicional de feijão fradinha da Marcinha",
        imagem: "farofa feijão.jpg",
        ingredientes: [
            "300g de feijão fradinha",
            "1 cebola",
            "1 alho",
            "coentro",
            "bacon",
            "linguiça caçabresa",
            "sal a gosto",
            "farinha de mandioca a gosto"
        ],
        preparo: [
            "Deixe o feijão de molho de um dia pro outro",
            "Cozinhe o feijão na pressão por no maximo 5 minutos após pegar pressão",
            "Em uma panela, adicione o bacon e deixe fritar, acrescente a linguiça calabresa <br> e a cebola com o alho, adicione o coentro por último",
            "Adicione somente os grãos do feijão",
            "Adicione a farinha e misture até se parecer com uma farofa",
            "Caso fique muito seco, adicione um pouco do caldo do cozimento do feijão"
        ]
    },
    {
        id: 2,
        nome: "Farofa de torresmo de frango",
        descricao: "Receita tradicional de farofa de pele de frango da Marcinha",
        imagem: "preciso de foto",
        ingredientes: [
            "1kg de feijão preto",
            "500g de carne seca",
            "300g de linguiça",
            "200g de costelinha de porco",
            "2 laranjas",
            "Couve",
            "Arroz branco"
        ],
        preparo: [
            "Deixe o feijão e as carnes de molho separadamente",
            "Cozinhe o feijão na pressão",
            "Adicione as carnes e deixe cozinhar",
            "Prepare os acompanhamentos",
            "Sirva com arroz, couve e laranja"
        ]
    },
    {
        id: 3,
        nome: "Brigadeiro Gourmet",
        descricao: "Brigadeiro cremoso especial",
        imagem: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3",
        ingredientes: [
            "2 latas de leite condensado",
            "200g de chocolate meio amargo",
            "1 colher de manteiga",
            "Chocolate granulado para decorar"
        ],
        preparo: [
            "Derreta o chocolate em banho-maria",
            "Misture com o leite condensado e a manteiga",
            "Cozinhe em fogo baixo até soltar do fundo",
            "Deixe esfriar e faça as bolinhas",
            "Passe no chocolate granulado"
        ]
    }
    // ... Mais receitas serão adicionadas aqui
];

function criarCardReceita(receita) {
    return `
        <div class="receita-card" onclick="abrirReceita(${receita.id})">
            <img src="${receita.imagem}" alt="${receita.nome}">
            <div class="receita-info">
                <h3>${receita.nome}</h3>
                <p>${receita.descricao}</p>
            </div>
        </div>
    `;
}

function abrirReceita(id) {
    const receita = receitas.find(r => r.id === id);
    const conteudo = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${receita.nome} - Receitas da Marcinha</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <h1>Receitas da Marcinha</h1>

            <div class="receita-individual">
                <h2>${receita.nome}</h2>
                <img src="${receita.imagem}" alt="${receita.nome}">
                
                <div class="ingredientes">
                    <h3>Ingredientes:</h3>
                    <ul>
                        ${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                </div>

                <div class="preparo">
                    <h3>Modo de Preparo:</h3>
                    <ol>
                        ${receita.preparo.map(passo => `<li>${passo}</li>`).join('')}
                    </ol>
                </div>
            </div>

            <footer>
                <p>&copy; 2024 Receitas da Marcinha - Todos os direitos reservados</p>
            </footer>
        </body>
        </html>
    `;

    const novaJanela = window.open('', '_blank');
    novaJanela.document.write(conteudo);
    novaJanela.document.close();
}

// Carregar receitas na página inicial
document.addEventListener('DOMContentLoaded', () => {
    const receitasContainer = document.querySelector('.receitas-grid');
    receitasContainer.innerHTML = receitas.map(receita => criarCardReceita(receita)).join('');
});