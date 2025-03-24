const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts--;

    if (guess === secretNumber) {
        message.textContent = `👍 Correct! The number was ${secretNumber}.`;
    } else if (attempts > 0) {
        message.textContent = guess > secretNumber ? `Too high! ${attempts} attempts left.` : `Too low! ${attempts} attempts left.`;
    } else {
        message.textContent = `😓 Oppps! Out of attempts! The number was ${secretNumber}.`;
    }
}

function resetGame() {
    location.reload();
}
