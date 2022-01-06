console.log("js")
let arraySymbol = ["🍋", "🔔","🍒","🍊"]
let squaresId = ["square1","square2","square3"]
let symbolStatus = []
//three squares lined up together with a symbol on each one
document.getElementById('square1').innerHTML = arraySymbol[0];
document.getElementById('square2').innerHTML = arraySymbol[1];
document.getElementById('square3').innerHTML = arraySymbol[2];
//runSlots(arraySymbol,squaresId)
document.getElementById('start').addEventListener('click',starTimer);
//runSlots(arraySymbol,squaresId)
// const symbol = selectSymbol(arraySymbol)
// console.log(symbol)
// const randomSymbols = runSlots(arraySymbol)
// console.log(randomSymbols)
// displaySymbols(randomSymbols,squaresId)

//This function selects a random symbol from the reel array
function selectSymbol(arraySymbol){
    const randomSymbol = Math.floor(Math.random()*arraySymbol.length)
    return arraySymbol[randomSymbol]
// it returns a random element from the array
}
//A function to create a new array with the random symbols
function generateSlots(){
    symbolStatus = []
    for(let i=0; i<arraySymbol.length; i++){
        symbolStatus.push(selectSymbol(arraySymbol))
    }
    return symbolStatus
//it neturns a new array with new random elements 
// symbolStatus is the array with the random elements
}
// a function that update the squares in the html. The atributes that I will pass are the array with the symbols and the array with the square ids (where I want the elements to be displayed)
function displaySymbols(){
    for (let i = 0; i < squaresId.length; i++){
        const newSymbol = document.getElementById(squaresId[i])
        newSymbol.innerHTML = symbolStatus[i]
    }  
}
// Three symbols selected at random (when I press the "lever" button - addEventListener clik will call this function)
// A function that calls the random array and displays the symbols on the squares
function runSlots(){
    const randomSlots = generateSlots()
    console.log(randomSlots)
    displaySymbols()
    const message = document.getElementById("game-messages")
    if (symbolStatus[0] === symbolStatus[1] && symbolStatus[1] === symbolStatus[2]){
        message.innerHTML = "You won!!"
    }else message.innerHTML = "Try again!!"
}

//An anounce that I have won if the the three symbols showing on the squares are the same


function starTimer(){
    let count = 0
    let animationStart = setInterval(()=>{
        count ++
        for(let i = 0; i < 10; i++){
            runSlots()
        }
        if (count>=10){
            clearInterval(animationStart)
        }    
    },100)    
}
starTimer()