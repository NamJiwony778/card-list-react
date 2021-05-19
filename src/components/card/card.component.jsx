import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return <div className="card-container">
                <img alt="character" src={`https://robohash.org/${props.character.id}?set=set4&size=180x180`}/>
                <h1>{props.character.name}</h1> 
                <p>{props.character.email}</p>
           </div>
}