/*

┌────────────────────────────┐
│        UI Layer            │
│  - Input: total            │
│  - Input: tendered         │
│  - Button: Calculate       │
│  - Output Display Area     │
└──────────────┬─────────────┘
               │ click event
               ▼
┌────────────────────────────┐
│   Event / Control Layer    │
│  - Reads input values      │
│  - Validates               │
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
let totalinput
let tenderedinput
let calcbutton 
let output

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

//1.Reads totalinput and tenderedinput, and then verifies the input with regex

//2. Triggers makechange function and passes the data totalinput and tenderedinput into total and tendered as a integer

//3. Spit result back into output