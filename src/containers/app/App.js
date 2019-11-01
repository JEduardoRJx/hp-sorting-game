import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';
import { fetchCharacters } from './apiCalls';
import Modal from '../../components/modal/Modal';
import MainScreen from '../../components/mainscreen/MainScreen';
import { setCharacters, isLoading } from '../../actions';
import Game from '../game/Game'

export class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    const { setCharacters, loading } = this.props;
    try {
      const characters = await fetchCharacters();
      setCharacters(characters)
      loading(false)
    } catch({ message }) {
      console.log(message);
    }
    
  }

  closeModal = () => {
    const modal = document.querySelector('.modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalImg = document.querySelector('.modal-img');
    const modalGif = document.querySelector('.modal-gif');
    modalTitle.style.display = 'none';
    modalImg.style.display = 'none';
    modalGif.style.display = 'block'
    setTimeout(function(){ 
      modal.style.display = 'none';
    }, 3000);
  }

  render() {
    return (
      <main>
        <h1 className='game-title'>Harry Potter and the Sorting Game</h1>
        <Redirect to='/' />
        <Modal closeModal={this.closeModal}/>
        <Route exact path='/' render={() => <MainScreen />} />
        <Route path='/game' render={() => <Game />} />

      </main>
    )
  }
}

export const mapStateToProps = ({ allCharacters, isLoading }) => ({
  allCharacters,
  isLoading
})

export const mapDispatchToProps = dispatch => ({
  setCharacters: characters => dispatch( setCharacters(characters) ),
  loading: bool => dispatch( isLoading(bool) )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);