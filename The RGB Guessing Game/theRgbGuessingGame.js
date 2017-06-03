var numSquares = 6;
var colors = [];
var pickedColor;
//var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
//var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
        //loop through mode modeButtons event listeners
    for(i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");  
            this.classList.add("selected");
            //this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            //^ code represents if else statement
            if(this.textContent === "Easy") {
                numSquares = 3;
            }else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setUpSquares() {
    for(i = 0; i < squares.length; i++) {
    //add initial colors to squares
    //squares[i].style.background = colors[i]; not needed anymore
    //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "CORRECT!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }else{
                this.style.background = "#232323";
                messageDisplay.textContent = guessWrong();
            }
        });
    }
}




// function guessRight() {
//     var arr = ["You got it!", "That's right!", "Great Job!", "Correct!", "Congratualtions!", "Great Job!"];
//     var random = Math.floor(Math.random() * arr.length);
//     return arr[random];   
// }

 function guessWrong() {
    var arr = ["Try Again", "Not Even Close!", "Are you Color Blind?", "Nope!", "You're bad at this...", "Keep Guessing!", "Wrong!"];
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}    


function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
        squares[i].style.background = colors[i];
        }else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
}

// refactor 2 seperate buttons with id called easyBtn and hardBtn that were changed to class mode in html and and called modeButtons for js

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected"); 
//     numSquares = 3;  
//     //generate new colors
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.background = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(i = 0; i < squares.length; i++) { 
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color) {
    //loop through all squares
    for(i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return"rgb(" + r + ", " + g + ", " + b +")";
}