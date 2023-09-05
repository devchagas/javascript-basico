function calculadora() {
    const op = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Multiplicação (*)\n 4 - Divisao Real (/)\n 5 - Divisao Inteira (%)\n 6 - Potenciacao (**)\n'));

    if (!op || op >= 7){
        alert('Digite uma opção válida');
        calculadora();
    } else {
    
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2) {
        alert('Parametros inválidos');
        calculadora();
    } else {
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOp();
        }
    
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOp();
        }
    
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOp();
        }
    
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOp();
        }
    
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOp();
        }
    
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
            novaOp();
        }
    
        function novaOp() {
            let op = prompt('Deseja fazer outra operacao\n 1 - Sim\n 2 - Não\n');
    
            if (op == 1)
                calculadora();
            else if (op == 2)
                alert('Até mais');
            else {
                alert('Digite uma operação válida');
                novaOp();
            }  
        }
    
        switch (op) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
            default:
                break;
        }
    
    }
    
    }
}

calculadora();