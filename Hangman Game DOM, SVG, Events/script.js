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