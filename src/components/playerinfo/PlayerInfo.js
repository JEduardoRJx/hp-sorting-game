import React from 'react';
import './PlayerInfo.scss'
import { connect } from 'react-redux';

const PlayerInfo = ({ user }) => {
  console.log(user)
  return(
    <aside>
      <img className='crest' 
        src={require('../../images/hogwarts_crest.png')}
        alt='hogwarts crest'/>
        <h1 className='user-name'>{user.name|| '--'}</h1>
    </aside>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(PlayerInfo);