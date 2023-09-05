function funcao() {
    console.log('Mensagem de uma funcao declarativa');
}

funcao();

var expressaoNomeacao = function expressaoNomeacao() {
    console.log('Mensagem de uma funcao de expressao');
} 

console.log(expressaoNomeacao);
expressaoNomeacao();

var arrowFun = () => {
    console.log('Sou uma função arrow!');
}

arrowFun();