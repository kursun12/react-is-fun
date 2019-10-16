import React, {Component} from 'react';
import './App.css';

import Arenas from './Componenets/Arenas'
import Home from './Componenets/Home'
import Lost from './Componenets/Lost'
import Navigation from './Componenets/Navigation'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cards: [],
    }
  }

  componentWillMount() {
      fetch('http://www.clashapi.xyz/api/arenas')
      .then(data => data.json())
      .then(data => this.setState({data}))

      fetch('http://www.clashapi.xyz/api/cards/')
      .then(data => data.json())
      .then(cards => this.setState({cards}))
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Navigation />

          <Switch>
            <Route exact path="/" render={() => (<Home cards={this.state.cards} />)} />
            <Route exact path="/Arenas" render={() => (<Arenas data={this.state.data} />)} />          
            <Route component={Lost} />
          </Switch>

          <footer>
            <p>disclaimer fam: </p>
          </footer>
              
        </div>
      </Router>
    )    
  }
}

export default App;
