import React from "react";

import "../styles/detail.scss";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: "/body-part.png",
      name: bodyPart,
    },
    {
      icon: "/target.png",
      name: target,
    },
    {
      icon: "/equipment.png",
      name: equipment,
    },
  ];

  return (
    <div className="detail">
      <img src={gifUrl} alt={name} loading="lazy" className="detail__image" />
      <div className="detail__container">
        <h1>{name}</h1>
        <h3>
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </h3>
        {extraDetail.map((item, index) => (
          <div key={item.icon} className="detail__extra">
            <button className="detail__button">
              <img src={item.icon} alt={bodyPart} />
            </button>
            <h4 className="detail__desc">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
