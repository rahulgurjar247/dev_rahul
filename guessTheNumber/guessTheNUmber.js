//selecting all item form html
let randomNumber;
let box = document.querySelector("#box")
const button = document.querySelector("#button");
const generate = document.querySelector("#Generate");



// Randomly generate a value between1-10
generate.addEventListener("click",function (){
    randomNumber = Math.floor(Math.random() * 11);
    // console.log( randomNumber)
    box.innerHTML = "thinking number 1-10"
    
})

//button eventLinsterner
button.addEventListener("click", function () {
    const input = document.getElementById("number").value;
    if (input > 0 && input < randomNumber) {
        box.innerHTML = "Enter a big please"
    }
    if (input == randomNumber) {
        // box.computedStyleMap.backgroumdColor = 'red'
        box.innerHTML = "You guessed a number"
        
    }
    if (input <=10 && input > randomNumber) {
        box.innerHTML = "Guess a small number"
    }
    if (input > 10) {
        box.innerHTML = "Number is out of range "
    }
})




