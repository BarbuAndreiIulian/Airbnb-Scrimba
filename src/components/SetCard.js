import React from "react";
import "./SetCard.css";

const SetCard = (props) => {
  return (
    <div className="cont1">
      <div className="stats">
        <img className="profile" src={`./assets/${props.image}`} />
        <div className="numStats">
          {props.status1} ({props.status2})
          <img className="elipse" src="./assets/elipse.svg" /> USA
        </div>
      </div>

      <h3 className="title">{props.title_elem}</h3>
      <h3 className="description-el">
        <span>From ${props.price_elem}</span> / person
      </h3>
    </div>
  );
};

export default SetCard;
