function calculadora(){
    let operacao = Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação(*)\n 4 - Divisão(/)\n 5 - Divisão inteira(%)\n 6 - Potencialização(**) '))

    let n1 = Number(prompt('insira o primeiro valor: '))
    let n2 = Number(prompt('insira o segundo valor'))
    let resultado

    function soma(){
        resultado = n1 + n2
        alert(` ${n1} + ${n2} = ${resultado} `)
    }
    function subtracao(){
        resultado = n1 - n2
        alert(` ${n1} - ${n2} = ${resultado} `)
    }
    function multiplicacao(){
        resultado = n1 * n2
        alert(` ${n1} * ${n2} = ${resultado} `)
    }
    function divisao(){
        resultado = n1 / n2
        alert(` ${n1} / ${n2} = ${resultado} `)
    }
    function divisaoInteira(){
        resultado = n1 % n2
        alert(` `)
    }
    function soma(){
        resultado = n1 + n2
        alert(` `)
    }

    if (operacao == 1){
        soma()
    } else if (operacao == 2){
        subtracao()
    } else if (operacao == 3){
        multiplicacao()
    }else if (operacao == 4){
        divisao()
    }else if (operacao == 5){
        divisaoInteira()
    }else if(operacao == 6){
        potencializacao()
    }
}
calculadora();


