console.log("js")
let arraySymbol = ["🍋", "🔔","🍒"]
let squaresId = ["square1","square2","square3"]

//three squares lined up together with a symbol on each one
document.getElementById('square1').innerHTML = arraySymbol[0];
document.getElementById('square2').innerHTML = arraySymbol[1];
document.getElementById('square3').innerHTML = arraySymbol[2];
document.getElementById('start').addEventListener('click', runSlots(arraySymbol, squaresId))
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
}
//A function to create a new array with the random symbols
function generateSlots(arraySymbol){
    const slotsRandom = []
    for(let i=0; i<arraySymbol.length; i++){
        slotsRandom.push(selectSymbol(arraySymbol))
    }
    return slotsRandom
}
// a function that update the squares in the html
function displaySymbols(slotsArray,idArray){
    for (let i = 0; i < idArray.length; i++){
        const newSymbol = document.getElementById(idArray[i])
        newSymbol.innerHTML = slotsArray[i]
    }  
}
// A function that calls the random array and displays the symbols on the squares
function runSlots(symbolArray,idSquares){
    const randomSlots = generateSlots(symbolArray)
    displaySymbols(randomSlots,idSquares)
}

