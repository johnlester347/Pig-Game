'use strict';

var scores, roundScore, activePlayer, gamePlaying, input;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--1').textContent = '0';

input = document.getElementById("searchTxt").value;


document.querySelector('.btn--roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;

        var winScore = input;

        // 2. Display the result 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== winScore) {
            roundScore += dice; // roundScore = roundScore + dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
            if (dice === 6) {
                if (dice === 6) {
                    roundScore = 0;
                }
            }
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.w-score').value;
        var winningScore;

        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name--' + activePlayer).innerHTML = "Winner";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('winner');
            // document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }

});

document.querySelector('.btn--new').addEventListener('click', resetPlayer);

function resetPlayer() {
    roundScore = 0;
    scores = [0, 0];
    activePlayer = 1;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.getElementById('name--0').textContent = "Player 1";
    document.getElementById('name--1').textContent = "Player 2";
    document.querySelector('.player--0').classList.remove = 'player--active';
    document.querySelector('.player--1').classList.remove = 'player--active';
    document.querySelector('.player--0').classList.remove = 'player--winner';
    document.querySelector('.player--1').classList.remove = 'player--winner';
    document.querySelector('.player--1').classList.remove = 'player--active';
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
}

foo();

function foo() {
    var age = 23;
    console.log(age);
}