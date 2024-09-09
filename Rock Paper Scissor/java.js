
const choices = [
    { name: 'rock', image: '/Rock Paper Scissor/img/rock.webp' },
    { name: 'paper', image: '/Rock Paper Scissor/img/paper.webp' },
    { name: 'scissors', image: '/Rock Paper Scissor/img/scissors.webp' }
];

const decision = [
    { name: 'draw', image: '/Rock Paper Scissor/img/tie.webp' }, 
    { name: 'winner', image: '/Rock Paper Scissor/img/winner.webp' } 
];




const p1Score = document.getElementById('1P-score');
const p2Score = document.getElementById('2P-score');
const p1Option = document.getElementById('player1-img');
const p2Option = document.getElementById('player2-img');
const resulOutcome = document.getElementById('outcome');


let player1Score = 0;
let player2Score = 0;


function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function endResult(player1Choice, player2Choice) {
    if (player1Choice.name === player2Choice.name) {
       
        resulOutcome.innerHTML = `<img src="${decision[0].image}" alt="Draw" style="width: 80%;"> <h3>DRAW!!</h3>`;
        return 'DRAW!!';
    } else if (
        (player1Choice.name === 'rock' && player2Choice.name === 'scissors') ||
        (player1Choice.name === 'paper' && player2Choice.name === 'rock') ||
        (player1Choice.name === 'scissors' && player2Choice.name === 'paper')
    ) {
        player1Score++;
        resulOutcome.innerHTML = `<img src="${decision[1].image}" alt="Player 1 Wins" style="width: 80%;"> <h3>PLAYER 1 WINS!!</h3>`;
        return 'PLAYER 1 WINS!!';
    } else {
        player2Score++;
        resulOutcome.innerHTML = `<img src="${decision[1].image}" alt="Player 2 Wins" style="width: 80%;"> <h3>PLAYER 2 WINS!!</h3>`;
        return 'PLAYER 2 WINS!!';
    }
}




function runGame() {
    const player1Choice = getRandomChoice();
    const player2Choice = getRandomChoice();
   
    p1Option.src = player1Choice.image;
    p2Option.src = player2Choice.image;
    
    endResult   (player1Choice, player2Choice);

    p1Score.innerHTML = `<h1>${player1Score}</h1>`;
    p2Score.innerHTML = `<h1>${player2Score}</h1>`;
}
