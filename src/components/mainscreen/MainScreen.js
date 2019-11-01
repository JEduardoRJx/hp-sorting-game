import React from 'react';
import './MainScreen.scss'
import PlayerInfo from '../../components/playerinfo/PlayerInfo'
import Navigations from '../navigations/Navigations'

const MainScreen = () => {
  return(
    <section className='main-screen'>
      <PlayerInfo />
      <Navigations />
    </section>
  )
}

export default MainScreen;