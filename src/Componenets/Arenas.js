import React from 'react';

const Arenas = (props) => {
    return ( 
        <body>         
          <div className="Articles">
            <div className="Article-Box">
              {props.data.map(item => (
                <div>
                <h2>{item.name}</h2>                  
                <img src={"http://www.clashapi.xyz/images/arenas/" + item.idName + ".png"} alt="Avatar" className="card-image" />
                <h3>Minimun trophies: {item.minTrophies}</h3>
                <p>Victory Gold: {item.victoryGold}</p>
              </div>
              ))}
            </div>
          </div>
          
          {/* <footer>
          <p>disclaimer fam: </p>
          </footer>
           */}
        </body>
     );
}
 
export default Arenas;