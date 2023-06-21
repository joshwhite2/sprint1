import React, { useEffect, useState } from "react";

const [breedImages, setBreedImages] = useState([]);

useEffect(() => {
    if (selectBreed !== "") {
      fetch(`•	https://dog.ceo/api/${selectBreed}/images/random/3`)
        .then((response) => response.json())
        .then((data) => {
          setBreedImages(data.message);
        });
    }
  }, [selectBreed]);