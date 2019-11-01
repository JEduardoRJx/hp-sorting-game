import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';
import { fetchCharacters } from './apiCalls'
import Modal from '../../components/modal/Modal'

export class App extends Component {
  constructor() {
    super();
  }

  // async componentDidMount() {
  //   try {
  //     const characters = await fetchCharacters();
  //     //action that sets characters to state
  //     console.log(characters)
  //     //action that filters characters set to a house
  //     const charactersInHouses = characters.filter(char => 'house' in char)
  //     //set charactersInHouses to state
  //     console.log(charactersInHouses)
  //   } catch({ message }) {
  //     console.log(message);
  //   }
    
  // }

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
        <Modal closeModal={this.closeModal}/>
      </main>
    )
  }
}

export const mapStateToProps = ({}) => ({

})

export const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);