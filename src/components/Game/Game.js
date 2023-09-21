import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput  from '../GuessInput';
import GuessResult from '../GuessResult';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  
  function handleSubmitGuess(tentativeGuess) {
   
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (nextGuesses.length === 6) {
      setGameStatus('lost');
      return;
    }

    if (tentativeGuess === answer)
      setGameStatus('won');    
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />      
      {gameStatus === 'running' && (<GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess}/>)}
      {gameStatus === 'won' && (<HappyBanner numOfGuesses={guesses.length}/>)}
      {gameStatus === 'lost' && (<SadBanner answer={answer}/>)}
    </>
  );
}

export default Game;
