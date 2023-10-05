
let randomNumber = parseInt((Math.random() * 100) + 1)
const userInput = document.getElementById('guessField')
const previousGuesses = document.querySelector('.guesses')
const remainingGuessesCount = document.querySelector('.lastResult')
const submit = document.getElementById('subt');
const startOver = document.querySelector('.resultParas');

const lowOrHi = document.querySelector('.lowOrHi');
const playGame = true
let guessCount = 1

let button = document.createElement('button')
// console.log(button);

// console.log("Random Num :: "+randomNumber);

if(playGame){
submit.addEventListener(('click'),(e)=>{
     e.preventDefault()
     const guess = parseInt(userInput.value)
     console.log(guess);
     validateGuess(guess)

})
}

function validateGuess(guess){
    if(guess <= 0 || guess > 100 || isNaN(guess) ){
        alert("Please enter valid number")
    } else{
    //    prevGuessArr.push(guess);
       if(guessCount>=10){
           displayGuess(guess)
           displayMessage(`Game Over. Random number was ${randomNumber}`);
           endGame()
       }else{
        displayGuess(guess);
        checkGuess(guess);
       }

       
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You gueesed it correct! Congrats you won the Game...........!")
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Guess is too low! try once again`)
    }else{
        displayMessage(`Guess is too high! try once again`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    previousGuesses.innerHTML += `${guess}, `;
    guessCount++;
    remainingGuessesCount.innerHTML = `${11 - guessCount}` 
}



function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    button.id = "newGame"
    button.classList.add('button')
    button.innerHTML ="Start New Game";
    startOver.appendChild(button)
    playGame = false
    startNewGame()
}

function startNewGame(){

    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        guessCount = 1;
        guessSlot.innerHTML = '';
        remainingGuessesCount.innerHTML = `${11 - guessCount}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(button)

        playGame = true;
    });
}