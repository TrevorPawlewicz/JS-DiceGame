/*
GAME RULES:
-----------
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

scores = [0,0]; // player 1, 2
roundScore = 0; // initial score of round
activePlayer = 0; // 0 or 1



document.querySelector('.dice').style.display = 'none';



document.querySelector('.btn-roll').addEventListener('click', function() {
    //
    var dice = Math.floor(Math.random() * 6) + 1; // random 1 - 6
    //
    var diceDOM = document.getElementById('dice-1');
    diceDOM.style.diplay = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    console.log("btn-roll clicked");

    //
});
