import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

import "../styles/similar-exercises.scss";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="similar-exercises">
      <h3>Exercises that target the same muscle group</h3>
      <div>
        {targetMuscleExercises ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
      <h3>Exercises that use the same equipment</h3>
      <div>
        {equipmentExercises ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
