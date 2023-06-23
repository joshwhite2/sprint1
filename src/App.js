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
  const [number, setNumber] = useState();
  const changeState = () => {
    if (number <=100&& number >= 1){
    setLinks(<ImageList breed={breed} number={number} />);}
    else{
    this.showError('must be between 1 & 100', 'error')};
    
  };

  return (
    <>
      <center className= 'container'>
        <div className= "title">
        <h1>Doggie
          <br/> Database</h1>
      
        <h3>Find photos of your favorite dogs</h3>
        </div>
        <span id="popup">
       
      </span>

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
        ></input>
        <br />
        <button onClick={changeState}>Show Images</button>
        </div>
      </center>
      
      <div id="gallery" className="image-grid">{links}</div>
      <p>{}</p>
    </>
  );
};

// showError(m, c);{
//   var p = document.createElement("p");
//   p.innerText = m;
//   p.className = c;
//   p.id = "box";};

//   document.querySelector("#popup").appendChild(p);

//   setTimeout(function () {
//     document.querySelector("#box").remove();
//   }, 2000);
// };

export default App;

