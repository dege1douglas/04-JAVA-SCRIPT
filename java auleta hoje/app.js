document.write('<h2>Olá mundo!</h2>')

var nome = 'dg';    //variavel global
const numero = 13;

if(nome == 'dg'){
    let nome = 'sacanagem';     //variavel local
    document.write(nome+"<br>");
}

document.write(nome + "<br>");
document.write(numero + "<br>");

//funções javascript
document.write(subtrai(2,6) + "<br>");

var soma = function(a,b){
    return a + b;
}
document.write(soma(8,6) + "<br>");

function subtrai(a,b){
    return a - b
}

nomeCompleto('Douglas','Danado')

function nomeCompleto(nome, sobrenome){
    document.write('Nome Completo: '+nome+' '+sobrenome)
}

function calculadora(numA, numB, op){
    if(op=="somar"){
    return numA + numB;
    } else if(op=="subtrair"){
    return numA - numB;
    } else if(op=="dividir"){
    return numA * numB;
    } else if(op=="multiplicar"){
    return numA / numB;
    }else{
    return "ESSE OPERADOR NÃO EXISTE!";
    }
}

document.write(calculadora(3,5,"soma"))
