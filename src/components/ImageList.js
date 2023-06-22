import React, { useEffect, useState } from "react";

const ImageList = ({ breed, number }) => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImageURLs();
  }, [breed, number]); // Add breed and number to the dependency array

  const fetchImageURLs = async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/${number}`
      );
      const data = await response.json();
      setImageUrls(data.message);
    } catch (error) {
      console.log("Could not fetch image URLs", error);
    }
  };

  return (
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt="" id="photo" />
      ))}
    </div>
  );
};

export default ImageList;
