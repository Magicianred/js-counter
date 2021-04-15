// Declare initial variables for counter, buttons and counter value and their content and attributes

const resetButton = document.getElementById("reset-button");
const counterValueClasses = "w-25 m-auto h-50 fs-1 border border-3 border-dark table-hover lh-lg";
const buttonsColClasses = "d-inline-block h-auto px-1"; 
const columnIds = ["plus-column", "minus-column"];
const buttonsClasses = "btn btn-light btn-outline-dark fs-1 w-100 mt-4 border-3";
const buttonsIds = ["plus-button", "minus-button"];
const startingValue = 0;
const operators = ["+", "-"];

// Invoke function to create "counter-value" div
addDiv();

// Loop invokes function to create two button columns

for (let i = 0; i <= 1; i++) {
addCols(i);
}


// Invoke function to create buttons
for (let i = 0; i <= 1; i++) {
addButtons(i);
}



// Get counter element and assign counter starting value
const counterText = document.getElementById("counter-value");
setZeroValue();

// Create "counter-value" div and append to parent element
function addDiv() {
    let counterValueDiv = document.createElement("div");
    counterValueDiv.className = counterValueClasses;
    counterValueDiv.id = "counter-value";
    document.getElementById("counter-div").appendChild(counterValueDiv);
}

// Create button columns
function addCols(index) {
let buttonColumn = document.createElement("div");
buttonColumn.className = buttonsColClasses;
buttonColumn.id = columnIds[index];
document.getElementById("buttons-row").appendChild(buttonColumn);
}

// Create buttons
function addButtons(index) {
let buttonElement = document.createElement("button");
buttonElement.className = buttonsClasses;
buttonElement.id = buttonsIds[index];
buttonElement.innerText = operators[index];
document.getElementById(columnIds[index]).appendChild(buttonElement);
}


// Set starting value to zero
function setZeroValue() {
    counterText.innerText = Number(startingValue);
}

const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");

// Increase counter on click
plusButton.addEventListener("click", () => {
    counterText.innerText = Number(counterText.innerText) + 1;
})

// Decrease counter on click, stops at zero
minusButton.addEventListener("click", () => {
    counterText.innerText > 0 ? 
    counterText.innerText = Number(counterText.innerText) - 1 :
    counterText.innerText = Number(0);
})

// Reset counter to zero
resetButton.addEventListener("click", () => {
    counterText.innerText = Number(startingValue);
})

