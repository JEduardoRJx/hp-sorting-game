import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';

export class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        Harry Potter and the Sorting Game
      </main>
    )
  }
}

export const mapStateToProps = ({}) => ({

})

export const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);