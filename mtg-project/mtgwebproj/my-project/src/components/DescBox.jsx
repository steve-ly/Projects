import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const DescBox = () => {
    const location = useLocation(); // Get the current location
    const deckListName = `${location.pathname}`.substring(7);  
    const [cards, setCards] = useState([]);

    useEffect(() => {
      // Fetch the JSON data
      fetch(`/${deckListName}.json`) 
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setCards(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, [deckListName]);



  return (
    <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-full mt-4 flex-row px-4 py-4'>
      <h1 className='text-white text-2xl font-bold tracking-tight mb-4'>Information</h1>
      <h1 className='text-white '>{cards.Information}</h1>
      <h1 className='text-white '>{cards.Difficulty}</h1>
      <h1 className='text-white '>{cards.Keywords}</h1>
      <h1 className='text-white '>{cards.Extra}</h1>
    </div>
  )
}

export default DescBox
