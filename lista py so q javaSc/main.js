// 01
worldHello.textContent = 'Hello World!'

//02
const form02 = document.querySelector('#form02')
form02.addEventListener('submit', (event)=>{
    event.preventDefault()
    const input02 = event.target.numberSelector.value
    numberPrint.textContent = input02

})

//03
const form03 = document.querySelector('#form03')
form03.addEventListener('submit', (event)=>{
    event.preventDefault()
    const operand103 = parseInt(document.querySelector('#operand103').value)
    const operand203 = parseInt(document.querySelector('#operand203').value)
    const adition = operand103+operand203
    sumResult.textContent = adition
}) 

//04
const form04 = document.querySelector('#form04')
form04.addEventListener('submit', (event)=>{
    event.preventDefault()
    const nota01 = parseInt(document.querySelector('#nota01').value)
    const nota02 = parseInt(document.querySelector('#nota02').value)
    const nota03 = parseInt(document.querySelector('#nota03').value)
    const nota04 = parseInt(document.querySelector('#nota04').value)
    const medium = (nota01+nota02+nota03+nota04)/4
    mediumPrint.textContent = medium
})

//05
