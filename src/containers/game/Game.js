import React, { Component} from 'react';
import { connect } from 'react-redux';
import './Game.scss';
import { NavLink } from 'react-router-dom'
import GameChar from '../../components/gamechar/GameChar';
import PlayerInfo from '../../components/playerinfo/PlayerInfo';
import { quoteIndex, quotes } from './quotes';
// import { fetchCharacters } from '../../apiCalls';
import { setCharacters, isLoading, setGameCharacters } from '../../actions';

export class Game extends Component {
  constructor() {
    super();
    this.state ={
      index: 0,
      correct: 0, 
      message: '',
      toggleModal: 'hide',
    }
  }

  checkAnswer = (event) => {
    const { gameCharacters } = this.props
    const house = event.target.name
    const charactersHouse = gameCharacters[this.state.index].house
    if (house === charactersHouse) {
      this.setState({
        index: this.state.index + 1, 
        correct: this.state.correct + 1, 
        message: 'Wicked!', 
        toggleModal: 'show'
      })
      setTimeout(() => {
        this.setState({toggleModal: 'hide'})
      }, 1000);
    } else {
      this.setState({
        message: 'Try Again!', 
        toggleModal: 'show'});
      setTimeout(() => {
        this.setState({toggleModal: 'hide'})
      }, 1000);
    }
    this.setState({index: this.state.index + 1})
  }

  // playAgain = async () => {
  //   console.log(this.props)
  //   const { setCharacters, loading } = this.props;
  //   try {
  //     loading(true)
  //     const characters =  await fetchCharacters();
  //     setCharacters(characters)
  //     loading(false)
  //   } catch({ message }) {
  //     console.log(message);
  //   }
  //   const { allCharacters } = this.props;
  //   console.log(allCharacters)
  //   setGameCharacters(allCharacters)
  //   // this.setState =({
  //   //   index: 0,
  //   //   correct: 0, 
  //   //   message: '',
  //   //   toggleModal: 'hide',
  //   // });
  // }

  render() {
    const { gameCharacters, isLoading, user } = this.props;
    console.log(gameCharacters)
    const percent = (this.state.correct / 10) * 100
    const quoteResult = quotes[quoteIndex[this.state.correct]]
    const header = quoteResult.header
    const quote = quoteResult.quote
    const house = user === undefined ? '' : user.house

    const results = <div className={`game-results ${house}`}>
      <h1 className='game-results-title'>{header}</h1>
      <h2 className='game-results-score'>{`${this.state.correct}/10 · ${percent}%`}</h2>
      <h3 className='game-results-quote'>{quote}</h3>
      {/* <button className='play-again-btn' 
        type='button'
        onClick={this.playAgain}>Dare to try again?</button> */}
      <NavLink to='/' className={`home-btn ${house}`}>Back to the Great Hall</NavLink>
    </div>

    return (
      <section className='game-section'>
        <PlayerInfo /> 
        {this.state.index <= 9 && 
        <GameChar character={gameCharacters[this.state.index]}
          isLoading={isLoading} 
          checkAnswer={this.checkAnswer}
          message={this.state.message}
          toggleModal={this.state.toggleModal} />}
        {this.state.index === 10 && results}
      </section>
    )
  }
}

export const mapStateToProps = ({gameCharacters, isLoading, allCharacters, user}) => ({
  gameCharacters,
  isLoading,
  allCharacters,
  user
})

export const mapDispatchToProps = dispatch => ({
  setCharacters: characters => dispatch( setCharacters(characters) ),
  loading: bool => dispatch( isLoading(bool) ),
  setGameCharacters: characters => dispatch( setGameCharacters(characters) )
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);