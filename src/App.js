import React, { useEffect, useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState(""); // State variable for the selected breed

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const fetchBreeds = Object.entries(data.message).flatMap(
          ([breed, subBreeds]) =>
            subBreeds.length > 0
              ? subBreeds.map((subBreed) => `${breed}/${subBreed}`)
              : breed
        );
        setBreeds(fetchBreeds);
      });
  }, []);

  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
    setBreed(event.target.value); // Update the selected breed state
  };

  const onNumberChangeHandler = (event) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue);
    setNumber(parsedValue);
  };

  const [links, setLinks] = useState();
  const [number, setNumber] = useState(1);
  const changeState = () => {
    setLinks(<ImageList breed={breed} number={number} />);
  };

  return (
    <>
      <center>
        <h1>Welcome to the Doggie Database</h1>
        <h3>Find pictures of your favorite doggie pals!!</h3>

        <select onChange={onOptionChangeHandler}>
          <option>Select Breed</option>
          {breeds.map((option, index) => (
            <option key={index} id={index} value={option}>
              {option.replace("/", " ")}
            </option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          max="100"
          value={number}
          onChange={onNumberChangeHandler}
        ></input>
        <br />
        <button onClick={changeState}>Show Images</button>
      </center>
      <div id="gallery">{links}</div>
      <p>{}</p>
    </>
  );
};

export default App;
