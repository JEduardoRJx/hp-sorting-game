import React, { Component } from 'react';
import './DiscoverHouse.scss';
import PlayerInfo from '../../components/playerinfo/PlayerInfo';
import { connect } from 'react-redux';
import { setUser } from '../../actions'

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
    return (
      <section className='discover-house-section'>
        <PlayerInfo />
        <form className='house-form'>
          <input className='name-input' 
            type='text' 
            placeholder='Enter Name' 
            onChange={this.handleName}/>
          <h2 className='house-label'>Witch or Wizard</h2>
          <div className='witchwizard-btn-wrapper'>
            <button className='witchwizard-btn' 
              type='button' 
              name='wizardkind' 
              value='Witch'
              onClick={this.handleWizardkindAndWand}>Witch</button>
            <button className='witchwizard-btn' 
              type='button' 
              name='wizardkind' 
              value='Wizard' 
              onClick={this.handleWizardkindAndWand}>Wizard</button>
          </div>
          <h2 className='house-label'>Select your Wand</h2>
          <div className='wand-btn-wrapper'>
            <button className='WAND-BTN' 
              type='button' 
              name='wand' 
              value='Elder, 15", thestral tail hair' 
              onClick={this.handleWizardkindAndWand}>Elder, 15", thestral tail hair</button>
            <button className='WAND-BTN' 
              type='button' 
              name='wand' 
              value='Holly, 11", phoenix feather'
              onClick={this.handleWizardkindAndWand}>Holly, 11", phoenix feather</button>
            <button className='WAND-BTN' 
              type='button' 
              name='wand' 
              value='Vine wood, 10 3/4", dragon heartstring'
              onClick={this.handleWizardkindAndWand}>Vine wood, 10 3/4", dragon heartstring</button>
            <button className='WAND-BTN' 
              type='button' 
              name='wand' 
              value='Fir, 9 1/2", dragon heartstring'
              onClick={this.handleWizardkindAndWand}>Fir, 9 1/2", dragon heartstring</button>
          </div>
          <button className='your-house-btn' 
            type='button' 
            onClick={this.handleUser}>Your House Is...</button>
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