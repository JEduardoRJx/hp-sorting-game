import React from 'react';
import './PlayerInfo.scss'

const PlayerInfo = () => {
  return(
    <aside>
      <img className='crest' 
        src={require('../../images/hogwarts_crest.png')}/>
    </aside>
  )
}

export default PlayerInfo