import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from './Componenets/About'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className="Nav-Bar">
          <Link to = "/About">About</Link>
          {/* <p>About</p> */}
          <p>item 2</p>
          <p>item 3</p>
          <p>item 4</p>
        </div>
        </header>
        <Switch>
          {/* <Route exact path="/" component={}></Route> */}
          <Route exact path="/About" component={About}></Route>
        </Switch>
        <body>         
          <div className="Articles">
            <div className="Article-Box">
              <div>
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <h2>Section1</h2>
                <p>Dit is een opvuller text voor dit artikel</p>
              </div>
              <div>
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <h2>Section2</h2>
                <p>Dit is een opvuller text voor dit artikel</p>
              </div>
              <div>
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <h2>Section3</h2>
                <p>Dit is een opvuller text voor dit artikel</p>
              </div>
              <div>
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <h2>Section4</h2>
                <p>Dit is een opvuller text voor dit artikel</p>
              </div>
              <div>
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <h2>Section3</h2>
                <p>Dit is een opvuller text voor dit artikel</p>
              </div>
              <div>
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <h2>Section4</h2>
                <p>Dit is een opvuller text voor dit artikel</p>
              </div>
              <div>
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <h2>Section3</h2>
                <p>Dit is een opvuller text voor dit artikel</p>
              </div>
              <div>
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <h2>Section4</h2>
                <p>Dit is een opvuller text voor dit artikel</p>
              </div>
            </div>
          </div>

          <footer>
          <p>disclaimer fam: </p>
          </footer>
          
        </body>
    </div>
    </Router>
  );
}

export default App;
