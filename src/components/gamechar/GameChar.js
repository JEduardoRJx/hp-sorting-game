import React from 'react';
import './GameChar.scss'

const GameChar = ({character, isLoading, checkAnswer}) => {
  console.log(isLoading)
  console.log(character)
  if(isLoading) {
    return null;
  }

  return (
    <article className='game-char'>
        <h1>{character.name}</h1>
        <img className='game-crest' 
          name='Gryffindor' 
          src={require('../../images/gryffindor.png')} 
          onClick={event => checkAnswer(event)}/>
      </article>
  )
}

export default GameChar;