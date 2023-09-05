var VouF = false;
console.log(typeof(VouF));
console.log(VouF);

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));
console.log(numeroQualquer);

var stringQualquer = "Teste";
console.log(typeof(stringQualquer));
console.log(stringQualquer);


var variavel;
console.log(variavel);
variavel = "gabriel";
console.log(variavel);

let variavel2;
console.log(variavel2);
variavel2 = 'chagas';
console.log(variavel2);

const variavel3 = 'constante';
console.log(variavel3);
//variavel3 = 'tres';   //Retorna erro pois const nao pode ser alterado
console.log(variavel3);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

var atriuicao = 'atrib';

var comparacao = '0' == 0;
console.log(comparacao);

var identica = '0' === 0;
console.log(identica);

var adicao = 1 + 1;
console.log(adicao);

var subtracao = 2 - 1;
console.log(subtracao);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

var divisaoReal = 6 / 2;
console.log(divisaoReal);

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

var potenciacao = 2 ** 10;
console.log(potenciacao);

var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !false;
console.log(nao);

