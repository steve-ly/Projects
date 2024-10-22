import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DescBox = () => {
    const location = useLocation(); // Get the current location
    const deckListName = `${location.pathname}`.substring(7);
    const [cards, setCards] = useState({});
    const [glossary, setGlossary] = useState([]);

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

    useEffect(() => {
        // Fetch the glossary JSON data
        fetch(`/glossary.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setGlossary(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Extract keywords from cards
    const keywords = Array.isArray(cards.Keywords) ? cards.Keywords : cards.Keywords?.split(',') || [];

    // Map keywords to their content from the glossary
    const keywordDefinitions = keywords.map(keyword => {
        const glossaryEntry = glossary.find(entry => entry.Keyword === keyword.trim());
        return glossaryEntry ? { keyword, content: glossaryEntry.Content } : null;
    }).filter(entry => entry !== null); // Remove null entries

    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-full mt-4 flex-row px-4 py-4 space-y-3'>
            <h1 className='text-white text-3xl font-bold tracking-tight mb-4 underline'>Summary</h1>
            <h1 className='text-white'>{cards.Information}</h1>
            <h1 className='text-white text-3xl font-bold underline'>Difficulty: {cards.Difficulty}</h1>
            <h1 className='text-white text-3xl font-bold underline'>Keywords</h1>
                {keywordDefinitions.map((entry, index) => (
                    <div key={index} className='text-white mb-2'>
                        <h2 className='font-bold'>{entry.keyword}:</h2>
                        <p>{entry.content}</p>
                    </div>
                ))
              }
            <h1 className='text-white text-3xl font-bold underline'>Extra Information</h1>
            <h1 className='text-white'>{cards.Extra}</h1>
        </div>
    );
}

export default DescBox;
