import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StatsAndMatches = ({ deckName }) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        // Fetch the JSON data for the specific deck
        fetch(`/matches.json`) 
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => setMatches(data))
          .catch((error) => console.error('Error fetching data:', error));
    }, [deckName]);

    // Filter matches and extract relevant data
    const deckMatchData = matches
    .map(match => {
        const deckIndex = match.Decks.indexOf(deckName);
        if (deckIndex !== -1) {
            return match;  // Return the whole match object
        }
        return null;
    })
    .filter(match => match !== null);// Remove null entries

    const totalGamesPlayed = deckMatchData.length; // Count of games played
    const totalPoints = deckMatchData.reduce((total, data) => total + parseInt(data.Points, 10), 0); // Sum of points
    const average = totalPoints/totalGamesPlayed;

    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-full mt-4 flex-col px-4 py-4'>
            <h1 className='text-white text-2xl font-bold tracking-tight mb-4'>Stats and Matches</h1>
            <div className='flex'>
                <div className='bg-white rounded-lg w-1/3 px-4 py-4 mr-4 h-1/3'>
                    <h2 className='text-black text-2xl font-bold tracking-tight underline mb-3'>Statistics for {deckName}</h2>
                    <p className='text-black'>Matches Played: {totalGamesPlayed}</p>
                    <p className='text-black'>Total Points: {totalPoints}</p>
                    <p className='text-black'>Average Points: {average}</p>
                </div>
                <div className='bg-white rounded-lg w-2/3 px-4 py-4 mb-5'>
                    <h2 className='text-black text-2xl font-bold tracking-tight underline mb-5'>Past Matches for {deckName}</h2>
                    {deckMatchData.map((match, index) => (
                    <div key={index} className='bg-white w-auto rounded-lg border-indigo-500 border-solid border-2 shadow-xl px-2 py-2 mb-4'>
                    <h1 className='text-black text-1xl font-bold tracking-tight'>{match.Date}</h1>
                    <table className="min-w-full text-left mb-6">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-400 text-black">Rankings</th>
                            <th className="px-4 py-2 border-b-2 border-gray-400 text-black">Decks</th>
                            <th className="px-4 py-2 border-b-2 border-gray-400 text-black">Points Earned</th>
                        </tr>
                        </thead>
                        <tbody>
                        {match.Rankings.map((ranking, idx) => (
                            <tr key={idx}>
                            <td className="px-4 py-2 border-b border-gray-400 text-black">{ranking}</td>
                            <td className="px-4 py-2 border-b border-gray-400 text-black"><Link to={`/decks/${match.Decks[idx].toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">{match.Decks[idx]}</Link></td>
                            <td className="px-4 py-2 border-b border-gray-400 text-black">{match.Points[idx]}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default StatsAndMatches;
