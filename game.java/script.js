let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget =()=>{
const number = Math.floor(Math.random() * 3);
return number;
}
console.log(generateTarget())

const compareGuesses =(human, computer, guess)=>{
  const humanWinner = Math.abs(human - guess);
  const computerWinner= Math.abs(guess - computer);
  return humanWinner <= computerWinner;


}

compareGuesses()

const updateScore = (winner) =>{
  if(winner == 'human'){
    return humanScore ++
  } else if(winner == 'computer'){
    return computerScore ++
    }


}

console.log(updateScore('human'));



const advanceRound = () =>{
  return currentRoundNumber ++
}
