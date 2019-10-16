import React from 'react';
import { Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        <header className="App-header">
        <div className="Nav-Bar">
        {/* <img src="/logo192.png" alt="Back Image..."/> */}
          <Link to = "/"><p className="white">Home</p></Link>
          <Link to = "/Arenas"><p className="white">Arena's</p></Link>
          <p className="white">item 3</p>
          <p className="white">item 4</p>
        </div>
        </header>
     );
}
 
export default Navigation;