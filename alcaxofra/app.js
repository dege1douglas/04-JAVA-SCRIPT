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

//test 13=01 SOMA ^^
//test 14
function fatoration(){
    let numberBase = Number(document.querySelector('#fatorial').value)
    let fatorialList = []
    let fatorialOperation = 1
    fatorialPrint.textContent = `FATORIAL DE ${numberBase}!`
    for(let i = numberBase; i > 0; i--){
        fatorialList.push(i)
        fatorialOperation = fatorialOperation * i
    }
    fatorialPrint.textContent = `${fatorialList.join(' . ')} = ${fatorialOperation}`
}


//test 15
function fibonacci() {
    const initialValue = Number(document.querySelector('#fibonacci').value)
    let fValue0 = 0
    let fValue1 = 1
    const fiboList = []
    for (let i = 0; fValue0 <= initialValue; i++) {
      fiboList.push(fValue0)
      [fValue0, fValue1] = [fValue1, fValue0 + fValue1]
    }
    fibonacciPrint.textContent = `FIBONACCI ATÉ ${initialValue}: ${fiboList.join(', ')}.`
  }
  
//test 16
function palindromo(){
    const rightText = String(document.querySelector('#palindromo').value)
    const reverseString = rightText.split("").reverse().join("")
    if (reverseString === rightText){
        palindromoPrint.textContent = `A palavra ${rightText} é um palíndromo ::: ${rightText} - ${reverseString} `
    }
    else{
        palindromoPrint.textContent = `A palavra ${rightText} NÃO é um palíndromo ::: ${rightText} - ${reverseString} `
    }
}

//test 17
//bubble sort
let arrayBS = [1, 0, 3, 2, 5, 7, 4]

function orderArray(){
    return arrayBS.sort((a, b) => b - a)
}

// for(let j=0; j < arrayBS.length; j++){
//     for(let i=0; i < arrayBS.length; i++){
//         if (arrayBS[i] > arrayBS[i+1]){
//             let temp = arrayBS[i]
//             arrayBS[i] = arrayBS[i+i]   
//             arrayBS[i+1] = temp
//         }
//     }
// }
// console.log(arrayBS)

//test 18 Math.pow
function potenciation(){
    let potenciaHome = []
    let baseNumber = Number(document.querySelector('#baseNumbers').value)
    let exposeNumber = Number(document.querySelector('#exposeNumbers').value)
    let acc = baseNumber
    for(let i = 0; i < exposeNumber; i++){
        potenciaHome.push(baseNumber)
    }
    console.log(potenciaHome)
    for (let j = 1; j < potenciaHome.length; j++) {
        acc = acc * potenciaHome[j]
    }
    if(exposeNumber === 0){
        acc=1
    }
    potenciaPrint.textContent = `${acc}`
}

//test 19
maximum = Math.max(...arrayBS)
minimum = Math.min(...arrayBS)
maxMinPrint.innerHTML = `ARRAY==> ${arrayBS} <br>MÁXIMO==> ${maximum} <br>MÍNIMO==> ${minimum}`

//test 20 - miniProject
function calculator(){
    let valueOne = Number(document.querySelector('#valueOne').value)
    let valueTwo = Number(document.querySelector('#valueTwo').value)
    let operator = String(document.querySelector('#operator').value)
    switch(operator){
        case '+':
            resultOperation.textContent = `${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`
            break
        case '*':
            resultOperation.textContent = `${valueOne} * ${valueTwo} = ${valueOne * valueTwo}`
            break
        case '-':
            resultOperation.textContent = `${valueOne} - ${valueTwo} = ${valueOne - valueTwo}`
            break
        case '/':
            resultOperation.textContent = `${valueOne} / ${valueTwo} = ${valueOne / valueTwo}`
            break

    }
}