const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper');
const playerScissors = document.querySelector('#scissors');

const rpsArr = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

const form = document.querySelector('form');

const h2 = document.querySelector('#h2Result');
const nameH3 = document.querySelector('h3');
const score = document.querySelector('#score');
const nameInput = document.querySelector('#name');
const winner = document.querySelector('#winner');
const bothChoices = document.querySelector('#bothChoices');
const h1NumOfRounds = document.querySelector('#numOfRounds');
let numOfRounds = 1;


const imgComputer = document.querySelector('#computerImg');

form.addEventListener('submit', function(event)
{
    event.preventDefault();  
    nameH3.innerText = `Hello ${nameInput.value}, let's play the rock paper scissors game!`;
    form.style.visibility = 'hidden';

    playerRock.addEventListener('click', ()=>
    {
        play('rock');
    });
    playerPaper.addEventListener('click', ()=>
    {
        play('paper');
    });
    playerScissors.addEventListener('click', ()=>
    {
        play('scissors');
    });
    
});






function play(choiceOfPlayer)
{
    const randomRps = Math.floor(Math.random(rpsArr)*rpsArr.length);
    h1NumOfRounds.innerText = `ROUND ${numOfRounds}`;
    if (choiceOfPlayer == rpsArr[randomRps])
    {
        h2.innerText = "It's a tie";
        bothChoices.innerText = `You chose ${choiceOfPlayer} and Computer chose ${rpsArr[randomRps]}`;
        score.innerText = `${nameInput.value}: ${playerScore} - Computer: ${computerScore}`;
    }
    else if (choiceOfPlayer === "rock" && rpsArr[randomRps]=== "scissors" ||
             choiceOfPlayer === "scissors" && rpsArr[randomRps]=== "paper" ||
             choiceOfPlayer=== "paper" && rpsArr[randomRps] === "rock")
             {
                playerScore++;
                bothChoices.innerText = `You chose ${choiceOfPlayer} and Computer chose ${rpsArr[randomRps]}`;   
                h2.innerText = `You win this round because ${choiceOfPlayer} destroys ${rpsArr[randomRps]}!`;
                score.innerText = `${nameInput.value}: ${playerScore} - Computer: ${computerScore}`;
                
             }

             else{
                computerScore++;
                bothChoices.innerText = `Computer chose ${rpsArr[randomRps]} and You chose ${choiceOfPlayer}`;
                h2.innerText = `Computer wins this round because ${rpsArr[randomRps]} destroys ${choiceOfPlayer}!`;
                score.innerText = `${nameInput.value}: ${playerScore} - Computer: ${computerScore}`;
                  

             }


    //here i show the image of the random choice of the computer 
    if (rpsArr[randomRps] === 'rock')
        computerImg.src = './img/rock.png';
    else if (rpsArr[randomRps] === 'paper')
        imgComputer.src = './img/paper.png';
    else 
        imgComputer.src = './img/scissors.png';


    numOfRounds++;
    
    if (playerScore == 3 || computerScore == 3)
    {
        score.innerText = `${nameInput.value}: ${playerScore} - Computer: ${computerScore}`;
        gameEnd();
        
        //set interval to delay the reset
        setTimeout(() => {
            resetGame();      
        }, 2000);
    }
   
    if (playerScore > 3 || computerScore > 3)
        alert('You cant go over 3');


   
}



function gameEnd()
{

    if (playerScore > computerScore)
    {
        winner.innerText = `The winner is ${nameInput.value}`;
    }
    else 
    {
       winner.innerText = 'The winner is the Computer';
    }
        
}


function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    h2.innerText = '';
    score.innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
    imgComputer.src = './img/questionMark.png';
    winner.innerText = '';
    form.style.visibility = '';
    h1NumOfRounds.innerText = '';
    numOfRounds = 1;
    form.reset();
}
