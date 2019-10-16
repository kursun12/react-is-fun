import React, {Component} from 'react';
import './App.css';

import Arenas from './Componenets/Arenas';
import Home from './Componenets/Home';
import Lost from './Componenets/Lost';
import Navigation from './Componenets/Navigation';
import CardDetails from './Componenets/CardDetails';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cardsArray: [],
    }
  }

  componentWillMount() {
      fetch('http://www.clashapi.xyz/api/arenas')
      .then(data => data.json())
      .then(data => this.setState({data}))

      fetch('http://www.clashapi.xyz/api/cards/')
      .then(data => data.json())
      .then(cardsArray => this.setState({cardsArray}))
  }

  render() {

    return (
      <Router>
        <div className="App">

          <Navigation />

          <Switch>
            <Route exact path="/" render={(props) => (<Home cards={this.state.cardsArray} />)} />
            <Route exact path="/Arenas" render={() => (<Arenas data={this.state.data} />)} />
            <Route exact path="/card/:idName" render={(props) => {
          
              let cardPosition = props.location.pathname.replace('/card/', '');

              return (
                <CardDetails                 
                  cards={this.state.cardsArray.filter(eachItem => {
                    return (eachItem['idName'].includes(cardPosition));
                  })}
                />
              )
            }} />          
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
