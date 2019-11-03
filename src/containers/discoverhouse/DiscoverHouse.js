import React, { Component } from 'react';
import './DiscoverHouse.scss';
import PlayerInfo from '../../components/playerinfo/PlayerInfo'

export class DiscoverHouse extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <section className='discover-house-section'>
        <PlayerInfo />
        <form className='house-form'>
          <input className='name-input' type='text' placeholder='Enter Name' />
          <h2 className='house-label'>Witch or Wizard</h2>
          <div className='witchwizard-btn-wrapper'>
            <button className='witchwizard-btn' type='button'>Witch</button>
            <button className='witchwizard-btn' type='button'>Wizard</button>
          </div>
          <h2 className='house-label'>Select your Wand</h2>
          <div className='wand-btn-wrapper'>
            <button className='WAND-BTN' type='button'>Elder, 15", thestral tail hair</button>
            <button className='WAND-BTN' type='button'>Holly, 11", phoenix feather</button>
            <button className='WAND-BTN' type='button'>Vine wood, 10 3/4", dragon heartstring</button>
            <button className='WAND-BTN' type='button'>Fir, 9 1/2", dragon heartstring</button>
          </div>
          <button className='your-house-btn' type='button'>Your House Is...</button>
        </form>
      </section>
    )
  }
}

export default DiscoverHouse;