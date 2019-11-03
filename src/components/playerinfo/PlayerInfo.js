import React from 'react';
import './PlayerInfo.scss'
import { connect } from 'react-redux';

const PlayerInfo = ({ user }) => {
  console.log(user.house)
  const houseCrest = user.house || 'hogwarts'
  return(
    <aside>
      <img className='crest' 
        src={require(`../../images/${houseCrest}.png`)}
        alt='hogwarts crest'/>
        <h1 className='user-name'>{user.name|| '--'}</h1>
        <h1 className='user-name'>{user.wizardkind || '--'}</h1>
        <h1 className='user-name'>{user.wand || '--'}</h1>

    </aside>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(PlayerInfo);