import React, { useState, useEffect } from "react";
import "../styles/search-exercises.scss";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { HorizontalScrollbar } from "../components";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLocaleLowerCase().includes(search) ||
          exercise.target.toLocaleLowerCase().includes(search) ||
          exercise.bodyPart.toLocaleLowerCase().includes(search) ||
          exercise.equipment.toLocaleLowerCase().includes(search)
      );

      setExercises("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="search-exercises">
      <h2 className="search-exercises__suggestion">
        Awesome exercises you <br />
        should know
      </h2>
      <form className="search-exercises__submit" onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          className="search-exercises__input"
          type="text"
          placeholder="Search Exercises"
        />
        <button className="search-exercises__btn">Search</button>
      </form>
      <div className="search-exercises__categories">
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts={true}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
