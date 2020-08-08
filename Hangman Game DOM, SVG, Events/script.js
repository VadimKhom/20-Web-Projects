const wordEl = document.getElementById("word");
const wrongLettersEL = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll("figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = word[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden word
function displayWord() {
    wordEl.innerHTML = `${selectedWord.split('').map(letter => `<span class ="letter">${correctLetters.includes(letter) ? letter :''}</span>`).join('')}`;

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if(innerWord===selectedWord){
        finalMessage.innerText = 'Congratulations! You won! =)';
        popup.style.display = 'flex';
    }
}

//Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(()=>{
        notification.classList.remove('show');
    },2000);
}

// Update the wrong letters
function updateWrongLettersEl() {
    // Display wrong letters
  wrongLettersEl.innerHTML = `
  ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
  ${wrongLetters.map(letter => `<span>${letter}</span>`)}
`;
// Display parts
figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });
}