import React from "react";
import { Link } from "react-router-dom";

import "../styles/exercise-card.scss";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="exercise-card__container">
        <button className="exercise-card__btn-body">{exercise.bodyPart}</button>
        <button className="exercise-card__btn-target">{exercise.target}</button>
      </div>
      <p>{exercise.name}</p>
    </Link>
  );
};

export default ExerciseCard;
