import React from 'react';

const Commander = () => {
    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-2/3 h-full p-2 text-left'>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Starting the game</h1>
            <p>Before starting the game, lets go through the zones. Unlike YuGiOh which requires you to place cards in certain areas, the zones in magic are up to you on how you want to set it up. Additionally, there are no limits to the number of lands and permanents you can play</p>
            <p className='mb-4'>There are 7 zones in Magic:</p>
            <p>1. Library: Your deck</p>
            <p>2. Hand: Player's hand</p>
            <p>3. Battlefield: The in play zone, permanents reside here</p>
            <p>4. Graveyard: Zone where cards that are destroyed, milled, discarded or sacrificed go to. Also where instants and sorceries go when resolved</p>
            <p>5. Stack: Where spells and abilities are put when played and where they wait to be resolved, note cards that say copy spells will refer to spells on the stack, not spells that have been resolved</p>
            <p>6. Exile: A zone outside field of play</p>
            <p>7. Command: Zone for the Commander, emblems, planes, schemes, dungeons</p>
            <p className='mt-4'>In game, players cannot have more than 7 cards in there hand and must discard excess cards during the clean-up phase</p>
            <p className='mb-4'>Everyone starts with 40hp and in commander when theres more than 2 opponents, the first player will draw during their draw step</p>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Commander</h1>
            <p>In commander format, you choose 1 (or more) legendary creature to be your commander. This card will be placed in the command zone in the start of the game. You may cast them from this zone as if you were in your hand. </p>
            <p>As an additional cost to cast a commander from the command zone, the player casting it must pay 2 generic mana for each time that player has previously cast it from the command zone. This is called the commander tax. If a player chooses to have two commanders, each is counted separately. If a commander is put into its owner's graveyard, is exiled, or is returned to a player's hand or library from anywhere, that player may choose to put it into the command zone as a state-based action.</p>
            <p>If a player is dealt 21 points of combat damage by a particular commander during the game, that player loses the game.</p>
        </div>
    );
};

export default Commander;
