import React, { useEffect, useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList";

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

  let breed = "";
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
    breed = event.target.value;
    console.log(breed);
  };

  const [links, setLinks] = useState();
  const [number, setNumber] = useState(4);
  const chageState = () => {
    console.log(breed);
    setLinks(<ImageList breed={breed} number={number} />);
  };

  return (
    <>
      <center>
        <h1>Welcome to the Doggie Database</h1>
        <h3>Find pictures of your favorite doggie pals!!</h3>

        <select onChange={onOptionChangeHandler}>
          <option>Select Breed</option>
          {breeds.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <br />
        <input></input>
        <br />
        <button onClick={chageState}>Show Images</button>
      </center>
      <div id="gallery">{links}
      </div>
    </>
  );
};

export default App;
