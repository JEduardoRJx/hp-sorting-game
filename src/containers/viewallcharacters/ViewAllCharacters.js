import React from 'react';
import './ViewAllCharacters.scss';
import PlayerInfo from '../../components/playerinfo/PlayerInfo';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const ViewAllCharacters = ({ user }) => {
  const house = user === undefined ? '' : user.house
  return (
    <section className='viewallcharacters-section'>
      <PlayerInfo />
      <div className='characters-content'>
        <h1 className='coming-soon'>COMING SOON</h1>
        <NavLink to='/' className={`house-home-btn ${house}`}>Back to the Great Hall</NavLink>
      </div>
    </section>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(ViewAllCharacters);