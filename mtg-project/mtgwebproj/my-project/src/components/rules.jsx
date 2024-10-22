import React from 'react';

const Rules = () => {
    return (
      <div className="flex flex-col items-center justify-center text-white h-full p-4">
        <h1 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-6xl mb-4">
          Tournament Rules
        </h1>
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-2/3 h-full p-2 text-left'>
          <ol class="list-decimal list-inside space-y-5">
            <li className='text-2xl'>A match are to be played with 3 to 5 players</li>
            <li className='text-2xl'>Points are given based on placements based on how many people played. The 1st place winner will receive N - 1 points where N is the total amount of players. 2nd place will receive N - 2, 3rd will receive N - 3 and this will go on such that last place will get 0</li>
            <li className='text-2xl'>Players get the option to choose their deck to play or choose to receive a random one. The order which players choose is done by leaderboard placement. The current last player will get first pick, and so on and so forth</li>
            <li className='text-2xl'>If players are tied on leaderboard, person with less matches gets the choice, otherwise scissors paper rock</li>
            <li className='text-2xl'>Players that choose to randomise their deck choice will receive 1 bonus point if they do not get come last</li>
            <li className='text-2xl'>Turn order will be at random</li>
            <li className='text-2xl'>Once a player has reached 8 matches or the season limit, no more points will be rewarded and they will be matched with players needing to catchup with matches</li>
            <li className='text-2xl'>Once everyone has played 8 matches, the top 4 players will play in a final match.</li>
            <li className='text-2xl'>For the final match, first place gets first choice of deck and their position in turn order, then second, then third then forth.</li>
            <li className='text-2xl'>In the final match, the game is played for 1st, 2nd and 3rd place prizes</li>
            <li className='text-2xl'>You may ask to swap the commander to the backup commander before the match starts</li>
            <li className='text-2xl'>Decks may be nerfec and buffed, additionally, the main commander may be swapped if the backup is naturally stronger</li>
            <li className='text-2xl'>Mulligans go in a 7,7,6,6,5,5 hand size order</li>
            <li className='text-2xl'>If the match group has a player with 0 matches, all decks must be played at random, bonus points are still active.</li>
          </ol>
        </div>
      </div>
    );
};

export default Rules;
