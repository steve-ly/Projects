import React, { useEffect, useState } from 'react';

const Home = () => {
    const [notices, setNotices] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
      // Fetch the leaderboard data
      fetch('/notices.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setNotices(data))
        .catch((error) => console.error('Error fetching leaderboard data:', error));
    }, []);

    useEffect(() => {
        // Fetch the leaderboard data
        fetch('/news.json')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => setNews(data))
          .catch((error) => console.error('Error fetching leaderboard data:', error));
      }, []);


    return(
        <div className="flex flex-col items-center text-white h-full p-4">
                <h1 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                    Welcome to MTG precon BR
                </h1>
                <div className='mx-auto rounded-lg w-full mt-4 flex-col px-4 py-4'>
                    <div className='flex'>
                        <div className="bg-black bg-opacity-60 rounded-lg w-1/3 px-4 py-4">
                            <h2 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-2xl mb-4">
                                News
                            </h2>
                            <div className='bg-white rounded-lg px-4 divide-y'>
                                {news.map((item, index) => (
                                    <div key={index} className='py-4' >
                                        <a 
                                            href={item.Link} 
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            target="_blank"
                                        >
                                            {item.Title}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-60 rounded-lg w-2/3 px-4 py-4 ml-4">
                            <h2 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-2xl mb-4">
                                Noticeboard
                            </h2>
                            <div className='bg-white rounded-lg px-4 py-4 space-y-4'>
                                {notices.map((notice, index) => (
                                    <div className="bg-purple-100 border-t border-b border-l border-r border-purple-500 text-purple-700 px-4 py-3 rounded-lg" key={index}>
                                        <p className="font-bold">{notice.Title}</p>
                                        <p className="text-sm">{notice.Content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-60 rounded-lg w-full px-4 py-4 mt-8">
                        <h2 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-2xl mb-4">
                            Upcoming Match: 31/12/2024 7pm @ 14 Address St, Suburb
                        </h2>
                    </div>
            </div>
        </div>
    );
}


export default Home;
