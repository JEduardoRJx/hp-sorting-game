import React from 'react';
import { connect } from 'react-redux';
import './Game.scss'

const Game = ({ gameCharacters }) => {
  console.log(gameCharacters)
  return(
    <section className='game-section'>
      GAME SECTION
    </section>
  )
}

const mapStateToProps = ({gameCharacters}) => ({
  gameCharacters
})

export default connect(mapStateToProps)(Game);