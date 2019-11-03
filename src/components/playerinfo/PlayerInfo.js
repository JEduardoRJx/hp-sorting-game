import React from 'react';
import './PlayerInfo.scss'
import { connect } from 'react-redux';

const PlayerInfo = ({ user }) => {
  const houseCrest = user.house || 'hogwarts';
  const userName = user.name|| 'Discover your';
  const userWizardkind = user.wizardkind || 'House to ';
  const userWand = user.wand || 'See Info. Here'

  return(
    <aside>
      <img className='crest' 
        src={require(`../../images/${houseCrest}.png`)}
        alt='hogwarts crest'/>
      <h1 className={`user-name ${houseCrest}`}>{userName}</h1>
      <h2 className={`user-wizardkind ${houseCrest}`}>{userWizardkind}</h2>
      <h2 className={`user-wand ${houseCrest}`}>{userWand}</h2>
    </aside>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(PlayerInfo);