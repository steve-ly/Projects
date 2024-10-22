import React from 'react';

const Lands = () => {
    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-2/3 h-full p-2'>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4'>Tapping Lands</h1>
            <p>There are 5 basic lands, which can give you mana corresponding to its colour in order to pay for costs of spells and abilities</p>
            <img className="mt-4 w-full h-auto max-h-64 object-contain" src="https://i.redd.it/1ykd0bbro1qb1.png" alt="spells" />
            <p className='mt-2'>To "extract" the mana, you tap the land which is simply turning the card</p>
            <img className="mt-4 w-full h-auto max-h-64 object-contain rotate-90" src="https://managathering.com/special/sld-1091-mountain.jpg" alt="spells" />   
            <p className='mt-2'>In this example, we tapped a basic mountain to give us 1 red mana floating</p>
            <p>To cast a spell, we first determine its converted mana cost</p>
            <p>For example the converted mana cost for this card:</p>
            <img className="mt-4 w-full h-auto max-h-64 object-contain" src="https://assets.moxfield.net/cards/card-AWNwR-normal.webp?127918416" alt="spells" />
            <p>Would be 8 mana total</p>
            <p>The grey circle with the number simply means you must pay n amount of any colour</p>
            <p>So this would mean you would need 5 mana of any colour, 1 red, 1 green and 1 white to cast this spell.</p>
        </div>
    );
};

export default Lands;
