import React from 'react';


const card = (props) => {
    return ( 
        <body>         
          <div className="Articles">
            <h1>Card description: </h1>
            <div className="Article-Box">

            {
              props.cards.map((card => ( //tijdelijk fix ughh
                <div className="card-clash">
                  <h2>{card.idName}</h2>                  
                  <img src={"http://www.clashapi.xyz/images/cards/" + card.idName + ".png"} alt="Avatar" className="card-image-mini" />
                  <h3>Rarity:  {card.rarity}</h3>
                  <h4>Type: {card.type}</h4>
                  <p className="padding-P">Elixercost: {card.elixirCost}</p>
                  <p className="padding-P">Description: {card.description}</p>
                  <p className="padding-p">Unlocked at Arena: {card.arena} </p>
                </div>
              ))) 
            }

            </div>
          </div>
        </body>
     );
}
 
export default card;