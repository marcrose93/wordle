import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResult({ guesses, answer }) {
  console.log("GuessResult: ", guesses )
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={guesses[num]} answer={answer}/>
      ))}
    </div>
  );
}

export default GuessResult;
