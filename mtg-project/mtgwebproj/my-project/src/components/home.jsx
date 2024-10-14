import React from 'react';

const Home = () => {
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
                            <div className='bg-white rounded-lg px-4 py-4 h-1/3'>
                                l
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-60 rounded-lg w-2/3 px-4 py-4 ml-4">
                            <h2 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-2xl mb-4">
                                Noticeboard
                            </h2>
                            <div className='bg-white rounded-lg px-4 py-4 h-1/3'>
                                l
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}


export default Home;
