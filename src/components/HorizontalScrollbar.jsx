import React from "react";
import { BodyPart, ExerciseCard } from "./";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        maxWidth: isBodyParts ? "1200px" : "none",
      }}
    >
      {isBodyParts
        ? data.map((item, index) => (
            <BodyPart
              key={index}
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ))
        : data
            .slice(0, 3)
            .map((item, index) => <ExerciseCard exercise={item} key={item} />)}
    </div>
  );
};

export default HorizontalScrollbar;
