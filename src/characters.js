// characters.js

// Importa o módulo readline
import readline from 'readline';

// Dados dos personagens
export const mario = { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 };
export const peach = { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0 };
export const yoshi = { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0 };
export const bowser = { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 };
export const luigi = { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 };
export const donkeyKong = { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 };

// Função para perguntar ao usuário
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Função para escolher personagens
export async function chooseCharacter() {
    const player1Choice = await askQuestion('Escolha o personagem do Jogador 1: \n1-Mario\n2-Peach\n3-Yoshi\n4-Bowser\n5-Luigi\n6-Donkey Kong\n Resposta:');
    let player1;

    switch (parseInt(player1Choice)) {
        case 1: player1 = mario; break;
        case 2: player1 = peach; break;
        case 3: player1 = yoshi; break;
        case 4: player1 = bowser; break;
        case 5: player1 = luigi; break;
        case 6: player1 = donkeyKong; break;
        default: console.log("Escolha inválida, padrão: Mario."); player1 = mario; break;
    }
    console.log(`Jogador 1 escolheu: ${player1.NOME} ‼ \n`);

    const player2Choice = await askQuestion('Escolha o personagem do Jogador 2: \n1-Mario\n2-Peach\n3-Yoshi\n4-Bowser\n5-Luigi\n6-Donkey Kong\n Resposta:');
    let player2;

    switch (parseInt(player2Choice)) {
        case 1: player2 = mario; break;
        case 2: player2 = peach; break;
        case 3: player2 = yoshi; break;
        case 4: player2 = bowser; break;
        case 5: player2 = luigi; break;
        case 6: player2 = donkeyKong; break;
        default: console.log("Escolha inválida, padrão: Mario."); player2 = mario; break;
    }
    console.log(`Jogador 2 escolheu: ${player2.NOME} ‼ \n`);

    return { player1, player2 }; // Retorna os jogadores escolhidos
}
