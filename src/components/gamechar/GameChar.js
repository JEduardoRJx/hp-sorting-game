import React from 'react';
import './GameChar.scss'

const GameChar = ({character, isLoading, checkAnswer, message, toggleModal}) => {
  console.log(isLoading)
  if(isLoading) {
    return null;
  }

  const popupMessage = <div className={`game-modal ${toggleModal}`}>
        <h1 className='game-modal-h1'>{message}</h1>
      </div>

  return (
    <article className='game-char'>
        {popupMessage}
        <h1 className='game-character-name'>{character.name}</h1>
        <img className='game-crest' 
          name='Gryffindor' 
          src={require('../../images/gryffindor.png')} 
          onClick={event => checkAnswer(event)}/>
        <img className='game-crest' 
          name='Slytherin' 
          src={require('../../images/slytherin.png')} 
          onClick={event => checkAnswer(event)}/>
        <img className='game-crest' 
          name='Hufflepuff' 
          src={require('../../images/hufflepuff.png')} 
          onClick={event => checkAnswer(event)}/>
        <img className='game-crest' 
          name='Ravenclaw' 
          src={require('../../images/ravenclaw.png')} 
          onClick={event => checkAnswer(event)}/>
      </article>
  )
}

export default GameChar;