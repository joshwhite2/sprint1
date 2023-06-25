import React, { useEffect, useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList";


const showError = (message) => {
  const errorPopup = document.createElement("div");
  errorPopup.className = "error-popup";
  const errorText = document.createTextNode(message);
  errorPopup.appendChild(errorText);
  document.body.appendChild(errorPopup);

  setTimeout(() => {
    document.body.removeChild(errorPopup);
  }, 2000);
};

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState("");
  const [links, setLinks] = useState(null);
  const [number, setNumber] = useState(0);

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
    setBreed(event.target.value);
  };

  const onNumberChangeHandler = (event) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue);
    setNumber(parsedValue);
  };


  const changeState = () => {
    if (number >= 1 && number <= 100) {
      setLinks(<ImageList breed={breed} number={number} />);
    } else {
      showError("Number should be between 1 and 100");
    }
  };

  return (
    <>
      <center className="container">
        <div className="title">
          <h1>
            Doggie
            <br /> Database
          </h1>

          <h3>Find photos of your favorite dogs</h3>
        </div>

        <div className="search">
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
            placeholder="enter number(1-100)"
            value={number}
            onChange={onNumberChangeHandler}
          />
          <br />
          <button onClick={changeState}>Show Images</button>
        </div>
      </center>

      <div id="gallery" className="image-grid">
        {links}
      </div>
    </>
  );
};

export default App;
