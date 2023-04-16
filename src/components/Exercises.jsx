import React, { useEffect, useState } from "react";
import { ExerciseCard } from "./";

import "../styles/exercises.scss";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Pagination from "./Pagination";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination logics
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentExercises = exercises.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="exercises" id="exercises">
      <p>Showing Results</p>
      <div className="exercises__container">
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={exercises.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Exercises;
