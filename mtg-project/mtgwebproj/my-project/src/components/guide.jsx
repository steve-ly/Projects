import React, { useState } from 'react';
import Cards from './guide_pages/cards';
import Lands from './guide_pages/lands';
import Combat from './guide_pages/combat';
import Stack from './guide_pages/stack';
import Turn from './guide_pages/turn';
import Keywords from './guide_pages/keywords';
import Commander from './guide_pages/commander';
import Types from './guide_pages/types';

const Guide = () => {
    // State to keep track of which button is active
    const [activeButton, setActiveButton] = useState(0); // Default to the first button

    // Define an array of button labels
    const buttonLabels = [
        'Cards',
        'Lands and Mana',
        'Combat',
        'Stack and Priority',
        'Turn Structure',
        'Keywords',
        'Commander & Rules',
        'Card Types',
    ];

    // Define an array of corresponding information for each label
    const buttonInfo = [
        <Cards></Cards>,
        <Lands></Lands>,
        <Combat></Combat>,
        <Stack></Stack>,
        <Turn></Turn>,
        <Keywords></Keywords>,
        <Commander></Commander>,
        <Types></Types>,
    ];

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <div className="flex h-full">
            <div className="flex flex-col justify-start -ml-8 fixed">
                {buttonLabels.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        className={`w-48 h-12 transition-all duration-300 ${
                            activeButton === index ? 'bg-purple-800 w-60' : 'bg-sky-500 hover:w-56 hover:bg-purple-800'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="flex-grow flex flex-col items-center justify-start mt-4 h-full">
                <h1 className="text-4xl font-bold mb-2">
                    {buttonLabels[activeButton]}
                </h1>
                <p className="text-lg text-center">
                    {buttonInfo[activeButton]}
                </p>
            </div>
        </div>
    );
};

export default Guide;
