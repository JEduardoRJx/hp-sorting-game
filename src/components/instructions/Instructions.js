import React from 'react';
import './Instructions.scss'
import PlayerInfo from '../playerinfo/PlayerInfo'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const Instructions = ({ user }) => {
  const house = user === undefined ? '' : user.house
  return (
    <section className='instructions-section'>
      <PlayerInfo />
      <div className='instructions-content'>
        <h1 className={`howtoplay-h1 ${house}`}>How To Play</h1>
        <p className={`${house}`}>We first recommend you head over and talk to the Sorting Hat to discover your house!</p>
        <p className={`${house}`}>A Witch or Wizards name will be displayed along with all four house icons. Match each character to his or her house. Can you get all 10 right?!</p>
        <img className={`screenshot1 ${house}`} src={require('../../images/screenshot1.png')} 
          alt='slytherin crest' />
          <NavLink to='/' className={`house-home-btn ${house}`}>Back to the Great Hall</NavLink>
      </div>
    </section>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(Instructions);