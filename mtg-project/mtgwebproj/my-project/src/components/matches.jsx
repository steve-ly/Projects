import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Matches = () => {
    const location = useLocation(); 
    const [leaderboard, setLeaderboard] = useState([]);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
      // Fetch the leaderboard data
      fetch('/leaderboard.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setLeaderboard(data))
        .catch((error) => console.error('Error fetching leaderboard data:', error));
    }, []);

    useEffect(() => {
      // Fetch the matches data
      fetch('/matches.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setMatches(data))
        .catch((error) => console.error('Error fetching matches data:', error));
    }, []);

  return (
    <div className="flex flex-col items-center text-white h-full p-4">
      <h1 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-6xl mb-4">
        Season 0
      </h1>
      <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-full mt-4 flex flex-col items-center px-4 py-4'>
        <h1 className="text-white text-balance font-bold tracking-tight sm:text-3xl mb-4">
          Leaderboard
        </h1>
        <div className='bg-white rounded-lg w-1/3 px-4 py-4 mb-4'>
          <table className='table-auto w-full text-black'>
            <thead>
              <tr>
                <th className="border-b-2 p-2 text-left">Name</th>
                <th className="border-b-2 p-2 text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((player, index) => (
                <tr key={index}>
                  <td className="p-2 border-b">{player.name}</td>
                  <td className="p-2 border-b text-right">{player.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1 className="text-white text-balance font-bold tracking-tight sm:text-3xl mb-4">
          Match History
        </h1>
        <div className='bg-white rounded-lg w-2/3 px-8 py-8 flex-col space-y-8'>
          {matches.map((match, index) => (
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
};

export default Matches;
