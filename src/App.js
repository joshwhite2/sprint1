import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  // search bar component
  const [breeds, setBreeds] = useState([]);

  //Need to use provided API to fetch list of dog breeds
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const fetchBreeds = Object.entries(data.message).flatMap(
          ([breed, subBreeds]) =>
            subBreeds.length > 0
              ? subBreeds.map((subBreed) => `${subBreed} ${breed}`)
              : breed
        );
        setBreeds(fetchBreeds);
      });
  }, []);

  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };
  return (
    <>
      <center>
        <h1>Welcome to the Doggie Database</h1>
        <h3>find the pictures of your favorite doggie pals!!</h3>

        <select onChange={onOptionChangeHandler}>
          <option>dog list here</option>
          {breeds.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <br />
        <input></input>
        <br />
        <button>Show Images</button>
      </center>
    </>
  );
};

export default App;
