import React, { Component } from 'react';
import './DiscoverHouse.scss';
import PlayerInfo from '../../components/playerinfo/PlayerInfo';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { NavLink } from 'react-router-dom';

export class DiscoverHouse extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      wizardkind: '',
      wand: '',
      house: ''
    }
  }

  handleName = (event) => {
    this.setState({name: event.target.value})
  }

  handleWizardkindAndWand = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


  handleUser = () => {
    const { house, setUser } = this.props
    const user = {
      name: this.state.name,
      wizardkind: this.state.wizardkind,
      wand: this.state.wand,
      house: house.toLowerCase()
    }
    setUser(user)
    const form = document.querySelector('.house-form');
    const modal = document.querySelector('.house-modal');
    form.style.display = 'none';
    modal.style.display = 'flex';
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState = ({
        name: '',
        wizardkind: '',
        wand: '',
        house: ''
    });
  }

  render() {
    const { user } = this.props;
    const house = user === undefined ? '' : user.house;
    const houseHeader = house === undefined ? '' : house.toUpperCase()
    let yourHouseIsBtn, houseModal;

    if(this.state.name !== '' && this.wizardKind !=='' && this.state.wand !== '') {
      yourHouseIsBtn = (
        <button className={`your-house-btn ${house}`} 
            type='button' 
            onClick={this.handleUser}>Your House Is...</button>
      )
    }

    houseModal = (
      <div className='house-modal'>
        <h1 className={`house-h1 ${house}`}>{houseHeader}</h1>
        <NavLink to='/' className={`house-home-btn ${house}`}>Back to the Great Hall</NavLink>
      </div>
    )

    return (
      <section className='discover-house-section'>
        <PlayerInfo />
        {houseModal}
        <form className='house-form'>
          <input className='name-input' 
            type='text' 
            placeholder='Enter Name' 
            onChange={this.handleName}/>
          <h2 className={`house-label ${house}`}>Witch or Wizard</h2>
          <div className='witchwizard-btn-wrapper'>
            <button className={`witchwizard-btn ${house}`} 
              type='button' 
              name='wizardkind' 
              value='Witch'
              onClick={this.handleWizardkindAndWand}>Witch</button>
            <button className={`witchwizard-btn ${house}`} 
              type='button' 
              name='wizardkind' 
              value='Wizard' 
              onClick={this.handleWizardkindAndWand}>Wizard</button>
          </div>
          <h2 className={`house-label ${house}`}>Select your Wand</h2>
          <div className='wand-btn-wrapper'>
            <button className={`wand-btn ${house}`} 
              type='button' 
              name='wand' 
              value='Elder, 15", thestral tail hair' 
              onClick={this.handleWizardkindAndWand}>Elder, 15", thestral tail hair</button>
            <button className={`wand-btn ${house}`} 
              type='button' 
              name='wand' 
              value='Holly, 11", phoenix feather'
              onClick={this.handleWizardkindAndWand}>Holly, 11", phoenix feather</button>
            <button className={`wand-btn ${house}`} 
              type='button' 
              name='wand' 
              value='Vine wood, 10 3/4", dragon heartstring'
              onClick={this.handleWizardkindAndWand}>Vine wood, 10 3/4", dragon heartstring</button>
            <button className={`wand-btn ${house}`} 
              type='button' 
              name='wand' 
              value='Fir, 9 1/2", dragon heartstring'
              onClick={this.handleWizardkindAndWand}>Fir, 9 1/2", dragon heartstring</button>
          </div>
          {yourHouseIsBtn}
        </form>
      </section>
    )
  }
}

export const mapStateToProps = ({ house, user }) => ({
  house,
  user
})

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch( setUser(user) )
})

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverHouse);