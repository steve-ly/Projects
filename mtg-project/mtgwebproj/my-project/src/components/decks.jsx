import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Decks = () => {
  const [images, setImages] = useState([]); 

  useEffect(() => {
    // Fetch the JSON data
    fetch('/deckList.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className="flex flex-col items-center justify-center text-white h-full p-4">
      <h1 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-6xl mb-4">
        Decks
      </h1>
      <h2 className="text-white text-balance tracking-tight sm:text-4xl mb-4">
        Pick A Commander
      </h2>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 w-2/3">
        {images.map((image, index) => (
          <Link to={`/decks/${image["Alt Text"].toLowerCase().replace(/\s+/g, '-')}`} key={index}>
            <img
              src={image["Image Source"]}
              alt={image["Alt Text"]}
              className="w-auto h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Decks;
