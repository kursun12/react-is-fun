import React from 'react';
import Kaart from './Kaart';

const Home = (props) => {
    return ( 
        <body>         
          <div className="Articles">
            <h1>Clash Royale Card List: </h1>
            
            <div className="Article-Box">
              {
                props.cards.map((card) => (
                  <Kaart
                  card={card}                 
                  />
                ))
              }
            </div>
            
          </div>
        </body>
     );
}
 
export default Home;