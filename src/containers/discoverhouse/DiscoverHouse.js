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
          <h2>Witch or Wizard</h2>
          <div className='witchwizard-btn-wrapper'>
            <button className='witch-btn' type='button'>Witch</button>
            <button className='wizard-btn' type='button'>Wizard</button>
          </div>
          <div className='wand-btn-wrapper'>
            <button className='WAND-BTN' type='button'>WAND-1</button>
            <button className='WAND-BTN' type='button'>WAND-1</button>
            <button className='WAND-BTN' type='button'>WAND-1</button>
            <button className='WAND-BTN' type='button'>WAND-1</button>
          </div>
          <button className='your-house-btn' type='button'>Your House Is...</button>
        </form>
      </section>
    )
  }
}

export default DiscoverHouse;