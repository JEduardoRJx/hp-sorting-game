import React from 'react';
import './PlayerInfo.scss'
import { connect } from 'react-redux';

export const PlayerInfo = ({ user }) => {
  const houseCrest = user.house || 'hogwarts';
  const userName = user.name|| 'Discover your';
  const userWizardkind = user.wizardkind || 'House to ';
  const userWand = user.wand || 'See Info. Here'
  return(
    <aside className={`${houseCrest}`}>
      <img className='crest' 
        src={require(`../../images/${houseCrest}.png`)}
        alt='hogwarts crest'/>
      <h1 className={`user-name`}>{userName}</h1>
      <h2 className={`user-wizardkind`}>{userWizardkind}</h2>
      <h2 className={`user-wand`}>{userWand}</h2>
    </aside>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(PlayerInfo);