import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigations.scss';
import { connect } from 'react-redux';
import { setGameCharacters, setHouse, isLoading } from '../../actions';
import { fetchSortingHat } from '../../apiCalls';

class Navigations extends Component {


  selectHouse = async () => {
    const { setHouse, loading } = this.props
    try {
      loading(true);
      const house = await fetchSortingHat()
      setHouse(house)
      loading(false)
    } catch ({ message }) {
      console.log(message)
    }
  }

  render() {
    const { setGameCharacters, allCharacters} = this.props
    return (
      <div className='navigation'>
        <div className='icon-wrapper sorting-hat'>
          <NavLink to='/discoveryourhouse' 
            onClick={this.selectHouse}>
            <img className='main-screen-img' 
              src={require('../../images/sortingHat.svg')} 
              alt='sorting hat' />
          </NavLink>
          <label>Discover Your House</label>
        </div>
        <div className='icon-wrapper golden-snitch'>
          <NavLink to='/game' onClick={() => setGameCharacters(allCharacters)}>
            <img className='main-screen-img' 
              src={require('../../images/snitch.svg')} 
              alt='golden snitch' />
          </NavLink>
          <label>Play Game</label>
        </div>
        <div className='icon-wrapper instructions'>
          <NavLink to='/instructions'>
            <img className='main-screen-img' 
              src={require('../../images/instructions.svg')} 
              alt='instructions' />
          </NavLink>
          <label>Instructions</label>
        </div>
        <div className='icon-wrapper characters'>
          <NavLink to='/characters'>
            <img className='main-screen-img' 
              src={require('../../images/characters.svg')} 
              alt='characters' />
          </NavLink>
          <label>View All Characters</label>
        </div>
        <div className='icon-wrapper wand'>
          <NavLink to='/spells'>
            <img className='main-screen-img' 
              src={require('../../images/wand.svg')} 
              alt='wand view spells' />
          </NavLink>
          <label>View All Spells</label>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ allCharacters, house }) => ({
  allCharacters
})

const mapDispatchToProps = dispatch => ({
  setGameCharacters: characters => dispatch( setGameCharacters(characters) ),
  loading: bool => dispatch( isLoading(bool) ),
  setHouse: house => dispatch( setHouse(house) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigations)