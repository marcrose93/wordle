import React from 'react';

function GuessInput({ gameStatus,  handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();    
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        id="guess-input" 
        type="text" 
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess} 
        disabled={gameStatus !== 'running'}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
