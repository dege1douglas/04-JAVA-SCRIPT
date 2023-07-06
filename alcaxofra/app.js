// test 01
console.log('Aprendendo JavaScript!')

// test 02
let nome = 'Douglas';
let idade = '18';
console.log(nome, idade);

//test 03
let num1 = 10; num2 = 5; soma = num1 + num2; subt = num1 - num2; mult = num1 * num2; div = num1/num2;
console.log('SOMA: '+soma+' | SUBTRAÇÃO: '+ subt+' | MULTIPLICAÇÃO: '+mult+' | DIVISÃO: '+ div)

//test 04
function comparation(){
    let value1 = Number(document.getElementById('value1').value)
    let value2 = Number(document.getElementById('value2').value)
    let bigger = 0
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
    let first = Number(document.getElementById('first-number').value)
    let last = Number(document.getElementById('last-number').value)
    console.log('O contador irá de '+first+' até '+last+':<br>')
    for(let i = first; i<=last; i++){
        console.log(":"+i+":")
    }
}

//test 06
function nickname(){
    let sign = prompt('Digite seu nick:')
    alert("Olá, "+sign+",este é um site de testes em JS!")
}

//test 07
let person={
    nameX:"James",
    year:"32",
    city:"Saint Petesburg"
}
console.log(person)

//test 08
let movies = []
function favorite_movie(){
    let movie = document.getElementById('movie').value
    movies.push(movie)
    console.log(movies[0])
    console.log(movies[movies.length-1])
    return false;
}

//test 09
function tenToOne(){
    let lower=10
    while(lower!=0){
        console.log(lower)
        lower--
    }
}

//test 10
function stringColector(){
    let print = document.querySelector('.print')
    let stringSelector = document.getElementById('stringColector').value
    print.textContent = 'A palavra '+stringSelector.toUpperCase()+' tem '+stringSelector.length+' caracteres.'
}

//test 11
    const date = new Date()
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()

console.log(`${day}/${month}/${year}`)

//extra
const timer = document.querySelector('.timer')

setInterval(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const templateHours = String(hours).length === 1 ? `0${hours}` : hours
    const templateMinutes = String(minutes).length === 1 ? `0${minutes}` : minutes
    const templateSeconds = String(seconds).length === 1 ? `0${seconds}` : seconds

    timer.textContent = `${templateHours}:${templateMinutes}:${templateSeconds}`
},1000)

//test 12
switch (new Date().getDay()) {
    case 0:
      day = "Sunday"
      break
    case 1:
      day = "Monday"
      break
    case 2:
       day = "Tuesday"
      break
    case 3:
      day = "Wednesday"
      break
    case 4:
      day = "Thursday"
      break
    case 5:
      day = "Friday"
      break
    case 6:
      day = "Saturday"
      break
}
dayOp.textContent = `Hoje (em inglês) é ${day}`
