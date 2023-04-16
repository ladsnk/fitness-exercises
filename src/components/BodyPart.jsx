import React from "react";
import "../styles/body-part.scss";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div
      className="body-part"
      style={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src="./gym.png" alt="gym" />
      <p>{item}</p>
    </div>
  );
};

export default BodyPart;
