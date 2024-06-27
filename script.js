// let is a keyword in use to command the console to use a variable
// "greeting"
let greeting = "Good morning everyone!"

// the console contains the variable "greeting" which shows the greeting
console.log(greeting);
console.log(greeting);
console.log(greeting);

let numberA = 20
let numberB = 30

console.log(numberA)
console.log(numberB)

let numberC = numberA + numberB
console.log(numberC)

let playerName = "Ashborn"

//Basic data types
//Strings (Text)

//let isOkay = true

//let myVar = 35
//const myOtherVar = 230

//let name = "Andy"

//let person = {
    //name: "Ashborn",
    //Age: 25
//}

// let names = [
    //"Andy",
    //"Ash",
    //"Born"
//]

function greeting () {
    let userName = "Ashborn"
    let greeting = "Hello There!" + userName

    console.log(greeting)
}

greeting ()
greeting ()
greeting ()

function buttonHandler () {
    console.log("Button Clicked!")
}

let myButton = document.getElementById("btn")
console.log(myButton)
myButton.addEventListener("click", buttonHandler)

let counter = document.querySelector("#counter")
console.log(counter)

let displayElement = counter.querySelector("span")
console.log(displayElement)

function increment () {
    let value = Number (displayElement.textContent)
    let newValue = value + 1

    displayElement.textContent = newValue
    //console.log("Incrementing")
}

function decrement () {
    let value = Number (displayElement.textContent)
    let newValue = value - 1

    displayElement.textContent = newValue
    console.log("Decrementing")
}

function reset () {
    console.log("Reseting")
}

let incrementButton = counter.querySelector("button:nth-child(2)")
let decrementButton = counter.querySelector("button:nth-child(3)")
let resetButton = counter.querySelector("button:nth-child(4)")

console.log(incrementButton)
console.log(decrementButton)
console.log(resetButton)

incrementButton.addEventListener("click", increment)
decrementButton.addEventListener("click", decrement)
resetButton.addEventListener("click", reset)

