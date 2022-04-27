import React from "react";
import caloriesIcon from "../assets/calories-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";
import proteinIcon from "../assets/protein-icon.png";

export default function Cards(props) {
  return (
    <div className="cards_mainInfo">
      <div className="card">
        <img src={caloriesIcon} alt="calories icon"></img>
        <div className="card_info">
          <span className="card_figure">{props.calorieCount}kCal</span>
          <span className="card_description">Calories</span>
        </div>
      </div>
      <div className="card">
        <img src={proteinIcon} alt="protein icon"></img>
        <div className="card_info">
          <span className="card_figure">{props.proteinCount}g</span>
          <span className="card_description">Proteines</span>
        </div>
      </div>
      <div className="card">
        <img src={carbsIcon} alt="carbs icon"></img>
        <div className="card_info">
          <span className="card_figure">{props.carbohydrateCount}g</span>
          <span className="card_description">Glucides</span>
        </div>
      </div>
      <div className="card">
        <img src={fatIcon} alt="fat icon"></img>
        <div className="card_info">
          <span className="card_figure">{props.lipidCount}g</span>
          <span className="card_description">Lipides</span>
        </div>
      </div>
    </div>
  );
}
