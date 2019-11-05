import React from 'react';
import './GameChar.scss'
import { connect } from 'react-redux'

export const GameChar = ({character, isLoading, checkAnswer, message, toggleModal, user}) => {
  if(isLoading) {
    return null;
  }

  const house = user === undefined ? '' : user.house

  const popupMessage = <div className={`game-modal ${toggleModal} ${house}`}>
        <h1 className='game-modal-h1'>{message}</h1>
      </div>

  return (
    <article className='game-char'>
      <p className={`${house}`}>Match each character to his or her house</p>
        {popupMessage}
        <h1 className={`game-character-name ${house}`}>{character.name}</h1>
        <img className='game-crest' 
          name='Gryffindor' 
          src={require('../../images/gryffindor.png')} 
          alt='gryffindor crest' 
          onClick={event => checkAnswer(event)}/>
        <img className='game-crest' 
          name='Slytherin' 
          src={require('../../images/slytherin.png')} 
          alt='slytherin crest' 
          onClick={event => checkAnswer(event)}/>
        <img className='game-crest' 
          name='Hufflepuff' 
          src={require('../../images/hufflepuff.png')} 
          alt='hufflepuff crest' 
          onClick={event => checkAnswer(event)}/>
        <img className='game-crest' 
          name='Ravenclaw' 
          src={require('../../images/ravenclaw.png')} 
          alt='ravenclaw crest' 
          onClick={event => checkAnswer(event)}/>
      </article>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(GameChar);