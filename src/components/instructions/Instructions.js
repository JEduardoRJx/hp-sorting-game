import React from 'react';
import './Instructions.scss'
import PlayerInfo from '../playerinfo/PlayerInfo'

const Instructions = () => {
  return (
    <section className='instructions-section'>
      <PlayerInfo />
      <div className='instructions-content'>
        <h1 className='howtoplay-h1'>How To Play</h1>
        <p>We first recommend you head over and talk to the Sorting Hat to discover your house!</p>
        <h1 className='howtoplay-h1'>Playing the Sorting Game</h1>
        <p>A Witch or Wizard's name will be displayed along with all four Hogwarts House icons. You have to select the house icon they belong to!</p>
        <img className='screenshot1' src={require('../../images/screenshot1.png')} 
          alt='slytherin crest' />
      </div>
    </section>
  )
}

export default Instructions;