import React from 'react';
import './MainScreen.scss'

const MainScreen = () => {
  return(
    <section className='main-screen'>
      <div className='icon-wrapper sorting-hat'>
        <img className='main-screen-img' 
          src={require('../../images/sortingHat.svg')} 
          alt='sorting hat' />
          <label>Discover Your House</label>
      </div>
      <div className='icon-wrapper golden-snitch'>
        <img className='main-screen-img' 
          src={require('../../images/snitch.svg')} 
          alt='golden snitch' />
          <label>Play Game</label>

      </div>
      <div className='icon-wrapper instructions'>
        <img className='main-screen-img' 
          src={require('../../images/instructions.svg')} 
          alt='instructions' />
          <label>Instructions</label>
      </div>
      <div className='icon-wrapper characters'>
        <img className='main-screen-img' 
          src={require('../../images/characters.svg')} 
          alt='characters' />
          <label>View All Characters</label>
      </div>
      <div className='icon-wrapper wand'>
        <img className='main-screen-img' 
          src={require('../../images/wand.svg')} 
          alt='wand view spells' />
          <label>View All Spells</label>
      </div>
    </section>
  )
}

export default MainScreen;