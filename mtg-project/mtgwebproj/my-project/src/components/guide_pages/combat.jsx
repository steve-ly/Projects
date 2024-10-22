import React from 'react';

const Combat = () => {
    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-2/3 h-full p-2 text-left'>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4'>Creatures</h1>
            <p> You may have notice that creature spells have this number on the bottom right hand side of the card </p>
            <div className='flex flex-col items-center mx-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-J9JOR-normal.webp?128112604" alt="hazel" />
            </div>
            <p className='mb-4'>This number only appears on creatures and is the creature's power and toughness. For hazel her power is 3 and toughness is 5. This means when this card attacks it will do 3 damage and this card can only take a maximum of 5 damage.</p>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4'>Basics of combat</h1>
            <p>To attack with your creatues during the combat phase (find more information in the phases part), you must first declare attackers </p>
            <p>You simply announce who you are attacking and which creatures are attacking who. You can only declare attacks on opponents or planeswalkers.</p>
            <p className='mb-4'>To declare which creatures you want attacking, simply tap the creature as you would a land by rotating the card.</p>
            <p>Great lets say someone is attacking you with Hazel. If you have no creatures you would take 3 damage.</p>
            <p>Lets say you do not want to take this damage, if you had creatures you can block.</p>
            <p>After the declare attacker stage, your opponents get the chance to declare blockers</p>
            <p>To block, simply assign your blocking creature to which attacking creature you want it to block. It does not tap. You can assign multiple blockers on one attacker. Any creature can block so long as it isn't tapped</p>
            <p className='mb-4'>Lets say you are being attacked by Hazel but this time you have:</p>
            <div className='flex flex-col items-center mx-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-6J3y7-normal.webp?128104294" alt="satya" />
            </div>
            <p> Assigning this creature to block Hazel will mitigate all damage. Damage will be done simultaneously and Hazel and Satya will be 3/2 until the clean up step</p>
            <p className='mb-4'>But lets look at another case:</p>
            <div className='flex flex-col items-center mx-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-V26dq-normal.webp?127912954" alt="aether" />
            </div>
            <p>If this card was blocking Hazel, it would be destroyed but excess damage will not go through so the blocking opponent takes no damage.</p>
            <p>This is true vice versa, if I were to attack with Aether Channeler and it was blocked by Hazel or Satya, It will die but I will not take damage.</p>
            <p>The only time this would not be true is if Hazel was attacking Aether Channeler but it had the keyword Trample, meaning the overflowing damage will be sent to the opponents face. Blocking with trampling Hazel however still will not deal excess damage to the attacker.</p>
            <p className='mb-4'>But what about blocking multiple?</p>
            <p>If there were 3 Aether Channelers, the attacker will choose how to assign the order of which creature is blocking first. Assignment is done by choosing how to split the power between these blockers.</p>
            <p>So the best case would be to assign 1 damage to the 1st, then 2nd and 3rd Aether Channeler, when this resolves the Aethers and Hazel will be destroyed. IF there were only 2 Aether Channelers blocking and hazel had Trample, she would do 1 damage to the face.</p>
            <p className='py-4'>It is important to note to be able to assign damage to the next creature in blocking order, you must have assigned lethal damage to the previous, e.g You cannot assign 0 then 1 and 1, to the 3 Aethers.</p>
        </div>
    );
};

export default Combat;
