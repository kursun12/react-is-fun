import React from 'react';

const Home = (props) => {
    return ( 
          <body>         
          <div className="Articles">
            <h1>Clash Royale Card List: </h1>
            <div className="Article-Box">
              {props.cards.map(item => (
                <div className="card-clash">
                <h2>{item.name}</h2>                  
                <img src={"http://www.clashapi.xyz/images/cards/" + item.idName + ".png"} alt="Avatar" className="card-image-mini" />
                <h3>Rarity:  {item.rarity}</h3>
                <p className="padding-P">Elixercost: {item.elixirCost}</p>
                <p className="padding-P">Description: {item.description}</p>
              </div>
              ))}
            </div>
          </div>
        </body>
     );
}
 
export default Home;