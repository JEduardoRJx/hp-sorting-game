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
        Discover House section
      </section>
    )
  }
}

export default DiscoverHouse;