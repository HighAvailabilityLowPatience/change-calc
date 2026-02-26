/*

┌────────────────────────────┐
│        UI Layer            │
│  - Input: total            │
│  - Input: tendered         │
│  - Button: Calculate       │DONE
│  - Output Display Area     │
└──────────────┬─────────────┘
               │ click event
               ▼
┌────────────────────────────┐
│   Event / Control Layer    │
│  - Reads input values      │
│  - Validates               │DONE
│  - Calls compute()         │
└──────────────┬─────────────┘
               │ function call
               ▼
┌────────────────────────────┐
│     Compute Layer          │
│  - Subtract                │DONE
│  - Decompose denominations │
│  - Return structured data  │
└────────────────────────────┘
 */
let totalinput = document.getElementById("amount-due")
let tenderinput = document.getElementById("amount-received")
let calcbutton = document.getElementById("calculate-change")
calcbutton.addEventListener("click",inputHandler)
let output = document.getElementById("coin-output")
//UI
//1.Populate all elements with proper text in DOM
//2.Displays results inside of make change function as a new object inside of output element




//Compute Layer
function makeChange(total,tendered){
const diff = tendered - total;
let denominations = {Dollar: 1, Quarter:.25, Dime:.10, Nickle:.05,Penny:.01}
let remainder = diff
let result = {}
for (let key in denominations) {
    result[key] = Math.floor(remainder / denominations[key])
    remainder = remainder%denominations[key]
   
}
 return result
    }
console.log(makeChange(40,100))


// Event handler

//1.Reads totalinput and tenderedinput
//2.Verifies inputs with regex
//3. Triggers makechange function and passes the data totalinput and tenderedinput into total and tendered as a integer
function inputHandler(){
if (/^[0-9]+\.[0-9]{2}$/.test(totalinput.value) && /^[0-9]+\.[0-9]{2}$/.test(tenderinput.value))
    {let resultOfMakeChange = makeChange(totalinput.value, tenderinput.value)
let displayString = ""
for (let key in resultOfMakeChange) {
    displayString += key + ": " + resultOfMakeChange[key] + "\n"
}
output.textContent = displayString}
else {let displayString = "Invalid Entry" 
    output.textContent = displayString 
}
return 
}