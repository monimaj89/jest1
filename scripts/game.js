let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
}

function showScore() {
    document.getElementById('score').innerText = game.score;
}

// curly braces because exporting more than one object from file.
module.exports = { game, newGame, showScore };


