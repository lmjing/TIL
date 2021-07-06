let rangeNum = null;
let guessNum = null;
let answer = null;

const guessNumInput = document.getElementById("guess-number");
const rangeNumInput = document.getElementById("range-number");
const randomForm = document.getElementById("random-form");
// const choseResult = document.getElementById("chose-result");
const gameResult = document.getElementById("game-result");
const resultDiv = document.querySelectorAll("div#game-result > div");

const getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const onPlaySubmit = function (event) {
    event.preventDefault();
    rangeNum = parseInt(rangeNumInput.value, 10);
    guessNum = parseInt(guessNumInput.value, 10);
    if (isNaN(rangeNum) || isNaN(guessNum)) {
        alert("Integer only allowed!");
        return;
    }
    if (rangeNum <= 0) {
        alert("Please enter a number greater than zero.!");
        return;
    }
    if (guessNum <= 0 || guessNum >= rangeNum) {
        alert(`Please enter a number between 0 and ${rangeNum}`);
        return;
    }
    answer = getRandomNumber(1, rangeNum);
    gameResult.classList.remove("hidden");
    resultDiv[0].innerText = `You chose: ${guessNum}, the machine chose: ${answer}`;
    resultDiv[1].innerText = `You ${guessNum === answer ? "won" : "lost"}!`;
};

randomForm.addEventListener("submit", onPlaySubmit);
