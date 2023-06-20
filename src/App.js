import React from "react";

const App = () => {
  const options = [
    "German Shepard",
    "Rotweiler",
    "Burmese Mountain",
    "Golden Retriever",
    "Labrador",
  ];
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
          {options.map((option, index) => {
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
