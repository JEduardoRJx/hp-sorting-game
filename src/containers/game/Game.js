import React, { Component} from 'react';
import { connect } from 'react-redux';
import './Game.scss'
import GameChar from '../../components/gamechar/GameChar'

class Game extends Component {
  constructor() {
    super();
    this.state ={
      index: 0,
      correct: 0, 
      message: '',
      toggleModal: 'hide'
    }
  }

  checkAnswer = (event) => {
    console.log(event)
    const { gameCharacters } = this.props
    if (event.target.name === gameCharacters[this.state.index].house) {
      this.setState({index: this.state.correct + 1, message: 'Correct!', toggleModal: 'show'})
      setTimeout(() => {
        this.setState({toggleModal: 'hide'})
      }, 2000);
    } else {
      this.setState({message: 'Incorrect', toggleModal: 'show'});
      setTimeout(() => {
        this.setState({toggleModal: 'hide'})
      }, 2000);
    }
    this.setState({index: this.state.index + 1})
  }

  render() {
    const { gameCharacters, isLoading } = this.props;
    console.log(gameCharacters)
    const message = <div className={`game-modal ${this.state.toggleModal}`}>
        <h1 className='game-modal-h1'>{this.state.message}</h1>
      </div>

    return (
      <section className='game-section'>
        {message} 
        <GameChar character={gameCharacters[this.state.index]} 
          isLoading={isLoading} 
          checkAnswer={this.checkAnswer}/>
      </section>
    )
  }
}

const mapStateToProps = ({gameCharacters, isLoading}) => ({
  gameCharacters,
  isLoading
})

export default connect(mapStateToProps)(Game);