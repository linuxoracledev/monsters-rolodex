import React from "react";
import "./card.styles.css"

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monstar.id}?set=set2&size=180x180`} alt={`${props.monstar.username}`} />
            <h2>{props.monstar.name}</h2>
            <p>{props.monstar.username}</p>
        </div>
    )
}