// test 01
console.log('Aprendendo JavaScript!')

// test 02
var nome = 'Douglas';
var idade = '18';
console.log(nome, idade);

//test 03
var num1 = 10; num2 = 5; soma = num1 + num2; subt = num1 - num2; mult = num1 * num2; div = num1/num2;
console.log('SOMA: '+soma+'<br>SUBTRAÇÃO: '+ subt+'<br>MULTIPLICAÇÃO: '+mult+'<br>DIVISÃO: '+ div)

//test 04
function comparation(){
    var value1 = Number(document.getElementById('value1').value)
    var value2 = Number(document.getElementById('value2').value)
    var bigger = 0
    console.log(value1, value2)
    if(value1 > value2){
        bigger = value1
    }
    else{
        bigger = value2
    }
    alert("O maior número é "+bigger);
}

//test 05
function until_hundred(){
    var first = Number(document.getElementById('first-number').value)
    var last = Number(document.getElementById('last-number').value)
    console.log('O contador irá de '+first+' até '+last+':<br>')
    for(var i = first; i<=last; i++){
        console.log(":"+i+":")
    }
}

//test 06
function nickname(){
    var sign = prompt('Digite seu nick:')
    alert("Olá, "+sign+",este é um site de testes em JS!")
}

//test 07
var person={
    nameX:"James",
    year:"32",
    city:"Saint Petesburg"
}
console.log(person)

//test 08
var movies = []
function favorite_movie(){
    var movie = document.getElementById('movie').value
    movies.push(movie)
    console.log(movies[0])
    console.log(movies[movies.length-1])
    return false;
}
