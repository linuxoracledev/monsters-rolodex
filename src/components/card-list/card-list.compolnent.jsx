
import React from "react";
import {Card} from "../cards/card.component"
import "../card-list/card-list.styles.css";


export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monstarsProps.map(monstar => {
                return <Card key={monstar.id} monstar={monstar} />
            }
            )}
        </div>
    )
}