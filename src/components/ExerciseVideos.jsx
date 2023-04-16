import React from "react";

import "../styles/exercise-videos.scss";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (exerciseVideos.length === 0) {
    return <h1>loading....</h1>;
  }

  return (
    <div
      className="exercise-videos"
      sx={{ marginTop: { lg: "203px", xs: "20px" } }}
      p="20px"
    >
      <h2
        className="exercise-videos__heading"
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </h2>
      <div className="exercise-videos__container">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="exercise-videos__video"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div>
              <h5>{item.video.title}</h5>
              <h6>{item.video.channelName}</h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
