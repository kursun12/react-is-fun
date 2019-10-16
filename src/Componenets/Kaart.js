import React from 'react';
import { Link} from 'react-router-dom';


const Kaart = (props) => {
    return ( 
        <Link to={`/card/${props.card.idName}`}>
        <div className="card-clash">
            <h2>{props.card.name}</h2>                  
            <img src={"http://www.clashapi.xyz/images/cards/" + props.card.idName + ".png"} alt="Avatar" className="card-image-mini" />
            <h3>Rarity:  {props.card.rarity}</h3>
            <p className="padding-P">Elixercost: {props.card.elixirCost}</p>
            <p className="padding-P">Description: {props.card.description}</p>
        </div>
        </Link>
     );
}
 
export default Kaart;