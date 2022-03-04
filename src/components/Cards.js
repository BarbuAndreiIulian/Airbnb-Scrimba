import React from "react";
import CardData from "./CardData";
import SetCard from "./SetCard";
import "./Cards.css";

const cardTemplate = CardData.map((stat) => {
  return (
    <SetCard
      image={stat.coverImg}
      status1={stat.stats.rating}
      status2={stat.stats.reviewCount}
      title_elem={stat.title}
      price_elem={stat.price}
    />
  );
});

const Cards = () => {
  return <div class="cardsToShow">{cardTemplate}</div>;
};

export default Cards;
