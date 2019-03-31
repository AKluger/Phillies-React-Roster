import React from "react";
import "./card.css"
function PlayerCard(props) {
  return (
    <div className="card rounded" onClick={() => props.checkScore(props.id)}>
        <img alt={props.name} src={props.image} />
    </div>
  );
}

export default PlayerCard;
