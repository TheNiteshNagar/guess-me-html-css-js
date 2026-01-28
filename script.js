// toggle theme
document.querySelector('.theme').addEventListener('click', () => {
  document.body.classList.toggle('light')
})

let guess = null
let movesCount = 0
let randomNumber = getRandomNumber()
let winningSound = new Audio('./public/audio/winning-sound.mp3')
let winningEffect = document.querySelector('.winning-effect')

const inputBox = document.querySelector('.input-guess')
const hint = document.querySelector('.hint')
const moves = document.querySelector('.moves')
const userGuess = document.querySelector('.user-guess')

function game() {
  // get inputbox value in ass guess
  guess = inputBox.value

  // if there is no guess return and show a hint
  if (!guess) {
    hint.textContent = 'Hint: Are you idiot 😒'
    return
  }

  // convert guess into number
  guess = Number(guess)

  // let see guess is equal to number or less or greater
  if (guess === randomNumber) {
    hint.style = 'color: blue'
    hint.textContent = 'Tum Jeet Gaye Bhai 🎉'
    
    // play winning sound
    winningSound.currentTime = 0
    winningEffect.classList.add('enable')
    winningSound.play()
    
    // after 5 sec reset everything
    setTimeout(() => {
      winningEffect.classList.remove('enable')
      movesCount = 0
      moves.textContent = ''
      hint.textContent = 'New Game Starting...'
      userGuess.textContent = ''
    }, 5000);

    // after 7 sec start the game again
    setTimeout(() => {
      hint.textContent = 'Guess Again!'
      randomNumber = getRandomNumber()
    }, 7000);

  } 
  
  else if (guess < randomNumber) {
    hint.style = 'color: red;'
    hint.textContent = 'Value bahut kam hai'
  } 
  
  else if (guess > randomNumber) {
    hint.style = 'color: green;'
    hint.textContent = 'Value bahut high hai'
  } 
  
  else {
    hint.textContent = 'Kuch gadbad ho gayi syd 🤕'
  }

  // after checking guess set move count and show the guess
  movesCount = movesCount + 1
  moves.textContent = `Moves: ${movesCount}`
  userGuess.textContent = `You Entered: ${guess}`

  // reset inputbox value
  inputBox.value = ''

  // focus on inputbox again
  inputBox.focus()
}


// play game on event like button click or enter or space button

// hit me button
document.querySelector('.hit-me').addEventListener('click', () => {
  game()
})

// on kepress enter or space
window.addEventListener('keypress', (ev) => {
  if (ev.code === 'Enter' || ev.code === 'Space') {
    game()
  }
})


// get a random number
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}