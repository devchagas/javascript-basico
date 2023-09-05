var jogador1 = 0;
var jogador2 = 1;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores válidos') : console.log('Jogadores inválidos');

    if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador 2 marcou ponto!');
        placar = jogador2 > jogador1;
    } else {
        console.log('Ninguém marcou ponto!');
    }

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou");
        break;
    case placar =  jogador2 > jogador1:
        console.log("Jogador 2 ganhou");
        break;
    default:
        console.log("Ninguém ganhou");
}

let vetor = ['v1', 'v2', 'v3', 'v4', 'v5'];

let object = {
    p1: 'v1',
    p2: 'v2',
    p3: 'v3'
};

for (let index = 0; index < vetor.length; index++){
    console.log(index);
}

for (i in object) {
    console.log(i);
}

for (i of vetor) {
    console.log(i);
}

for (i of object.p1) {
    console.log(i);
}

var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

var a = 0;

do {
    a++;
    console.log(a);
} while (a < 10)

