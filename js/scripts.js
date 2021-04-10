// Set initial zero value
const counterText = document.getElementById("counter-value");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const startingValue = 0;

setZeroValue();

// Set starting value to zero
function setZeroValue(){
    counterText.innerText = Number(startingValue);
}

// Increase counter on click
plusButton.addEventListener("click", function(e) {
    counterText.innerText = Number(counterText.innerText) + 1;
})

// Decrease counter on click
minusButton.addEventListener("click", function(e) {
    if (counterText.innerText > 0) {
    counterText.innerText = Number(counterText.innerText) - 1;
    } else {
        counterText.innerText = Number(0);
    }
})

