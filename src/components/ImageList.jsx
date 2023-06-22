import React, { useEffect } from "react";
import { useState } from "react";

const ImageList = ({ breed, number }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImageURLs();
  }, []);

  const fetchImageURLs = async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/${number}`
      );
      const data = await response.json();
      setImageUrls(data.message);
    } catch (error) {
      console.log("Could not fetch image URL's", error);
    }
  };

  return (
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt="" id="photo"/>
      ))}
    </div>
  );
};

export default ImageList;
