import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigations.scss';

const Navigations = () => {
  return (
    <div className='navigation'>
      <div className='icon-wrapper sorting-hat'>
        <NavLink to='/discoveryourhouse'>
          <img className='main-screen-img' 
            src={require('../../images/sortingHat.svg')} 
            alt='sorting hat' />
        </NavLink>
        <label>Discover Your House</label>
      </div>
      <div className='icon-wrapper golden-snitch'>
        <NavLink to='/game'>
          <img className='main-screen-img' 
            src={require('../../images/snitch.svg')} 
            alt='golden snitch' />
        </NavLink>
        <label>Play Game</label>
      </div>
      <div className='icon-wrapper instructions'>
        <NavLink to='/instructions'>
          <img className='main-screen-img' 
            src={require('../../images/instructions.svg')} 
            alt='instructions' />
        </NavLink>
        <label>Instructions</label>
      </div>
      <div className='icon-wrapper characters'>
        <NavLink to='/characters'>
          <img className='main-screen-img' 
            src={require('../../images/characters.svg')} 
            alt='characters' />
        </NavLink>
        <label>View All Characters</label>
      </div>
      <div className='icon-wrapper wand'>
        <NavLink to='/spells'>
          <img className='main-screen-img' 
            src={require('../../images/wand.svg')} 
            alt='wand view spells' />
        </NavLink>
        <label>View All Spells</label>
      </div>
    </div>
  )
}

export default Navigations