import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../apiCalls';
import Modal from '../../components/modal/Modal';
import MainScreen from '../../components/mainscreen/MainScreen';
import { setCharacters, isLoading } from '../../actions';
import Game from '../game/Game';
import DiscoverHouse from '../discoverhouse/DiscoverHouse';
import Instructions from '../../components/instructions/Instructions';
import ViewAllCharacters from '../viewallcharacters/ViewAllCharacters';
import ViewAllSpells from '../viewallspells/ViewAllSpells';


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
    const modalContents = document.querySelector('.modal-contents');
    const modalGif = document.querySelector('.modal-gif');
    modalContents.style.display = 'none';
    modalGif.style.display = 'block'
    setTimeout(function(){ 
      modal.style.display = 'none';
    }, 3000);
  }

  render() {
    const { user } = this.props
    const house = user === undefined ? '' : user.house
    return (
      <main className={`${house}`}>
        <h1 className={`game-title ${house}`}>Harry Potter and the Sorting Game</h1>
        <Redirect to='/' />
        <Modal closeModal={this.closeModal}/>
        <Route exact path='/' render={() => <MainScreen />} />
        <Route path='/game' render={() => <Game />} />
        <Route path='/discoveryourhouse' render={() => <DiscoverHouse />} />
        <Route path='/instructions' render={() => <Instructions />} />
        <Route path='/characters' render={() => <ViewAllCharacters />} />
        <Route path='/spells' render={() => <ViewAllSpells />} />
      </main>
    )
  }
}

export const mapStateToProps = ({ allCharacters, isLoading, user }) => ({
  allCharacters,
  isLoading,
  user
})

export const mapDispatchToProps = dispatch => ({
  setCharacters: characters => dispatch( setCharacters(characters) ),
  loading: bool => dispatch( isLoading(bool) )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);