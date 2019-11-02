import React, { Component} from 'react';
import { connect } from 'react-redux';
import './Game.scss'
import GameChar from '../../components/gamechar/GameChar'

class Game extends Component {
  constructor() {
    super();
    this.state ={
      index: 0,
      correct: 0
    }
  }

  checkAnswer = (event) => {
    const { gameCharacters } = this.props
    if (event.target.name === gameCharacters[this.state.index].house) {
      console.log('correct')
    this.setState({index: this.state.correct + 1})

    } else {
      console.log('incorrect')
    }
    this.setState({index: this.state.index + 1})
  }

  render() {
    const { gameCharacters, isLoading } = this.props;
    console.log(gameCharacters)
    console.log(this.state)
    
    return (
      <section className='game-section'>
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