import React from 'react';

const Stack = () => {
    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-2/3 h-full p-2 text-left'>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>The Stack</h1>
            <p>How do we interact with eachother like in YuGiOh? In Magic we use the Stack, an imaginary place where spells are queued before resolving.</p>
            <p>So when you cast a spell, It does not resolve instantly, instead is place on this stack and you pass "priority"</p>
            <p>Priority is simply who can interact now or who can cast Instants or activate abilities or do take action that is "Instant Speed"</p>
            <p>Note that you can only play spells other than instants when the stack is empty and its your turn (You are the active player)</p>
            <p>Priority would be passed in turn order and when a round of priority is passed with nothing new put on the stack, the card on top of the stack is resolved and another round of priority is given. This repeats until the stack is empty allowing everyone to interact</p>
            <p>Lets look at an example:</p>
            <p>1. Active player plays a sorcery on an empty stack </p>
            <p>2. This Player has priority and can choose to keep adding to the stack</p>
            <p>3. Active player plays another instant and then passes priority to the Non-Active Player</p>
            <p>4. NAP responds with an instant and an activated ability, this ability is also placed on the stack. Passing Priority back</p>
            <p>5. AP does not have a response so they pass again</p>
            <p>6. NAP does not have any response so they pass </p>
            <p>7. Since a round of priority was passed from the AP with nothing new added to the stack, the activated ability resolves and AP gets prior again</p>
            <p className='mb-4'>8. AP can choose to play or pass and this repeats until the stack is empty</p>
            <p>So what uses the stack?</p>
            <p className='mb-4'>Spells, Activated abilities that are not mana abilities and triggered abilities all use the stack. Note that activated and triggered abilities act independently from their sources, so if a triggered ability is placed on the stack, then destroying the source will not do anything since it is already on the stack.</p>
            <p>For triggered abilities, they can trigger anytime, but nothing happens at the time of trigger. When a player receives priority, each triggered ability that has triggered but has not been placed on the stack is put on the stack.</p>
            <p>So what is considered "Instant Speed"?</p>
            <p>Instant speed simply means an action that can be played as if it were an instant.These actions are:</p>
            <p>Actions you can take include: Instants, cards with keyword Flash, activated abilities, turning a creature face up, unlocking doors, suspending card, foretell or plotting cards.</p>
            <p className='mb-5'>There is also one more additional step when talking about timing, priority and stack, State based actions.</p>
            <p>State based actions are actions that does not pay attention to what happens during the resolution of spells and/or abilities</p>
            <p>Whenever a player gets priority, the game checks for certain conditions for state based actions (SBA) then will perform all SBAs simultaneously as a single event. If any SBA are performed from this check, then the check is repeated, otherwise, triggered abilities that are awaiting to be put on the stack are placed there and the check is repeated. When no more SBA are done by checks and no triggered abilities are queued, then priority is finally given to that player</p>
            <p>So essentially, before the priority is given to a player, you check for SBAs, keep doing that until no SBAs are performed and then triggers are added to stack. Check for SBAs again, then if neither triggers or SBAs occur, then player gets prior</p>
            <p>So what are the State based actions? These include:</p>
            <p>1. If a player has 0 or less life, that player loses</p>
            <p>2. If a player attempted to draw from an empty deck, they lose</p>
            <p>3. If a player has ten or more poison counters, they lose</p>
            <p>4. If a token is in a zone other than the battlefield, it ceases to exists</p>
            <p>5. If a copy of a spell is in a zone other than the stack, it ceases to exists.</p>
            <p>6. If a copy of a card is in anyother zone other than the stack or battlefield it ceases to exists</p>
            <p>7. If a creature has toughness 0 or less, put it into the graveyard</p>
            <p>8. If a creature has toughness greater than 0, it has damage marked on it, and the total damage marked on it is greater than or equal to its toughness, that creature is destroyed</p>
            <p>9. If a creature has toughness greater than 0 and it's been dealt damage from a source with deathtouch, it is destroyed</p>
            <p>10. If planeswalkers loyalty is 0, it is put into the graveyard</p>
            <p>11. If two or more legendary permanents with the same name are controlled by the same player, that player chooses one of them, and the rest are put into their owners’ graveyards.</p>
            <p>12. If an Aura is attached to an illegal object or player, or is not attached to an object or player, that Aura is put into its owner’s graveyard.</p>
            <p>13. If an Equipment or Fortification is attached to an illegal permanent or to a player, it becomes unattached from that permanent or player. It remains on the battlefield.</p>
            <p>14. If a battle or creature is attached to an object or player, it becomes unattached and remains on the battlefield. Similarly, if any nonbattle, noncreature permanent that’s neither an Aura, an Equipment, nor a Fortification is attached to an object or player, it becomes unattached and remains on the battlefield. </p>
            <p>15. If a permanent has both a +1/+1 counter and a -1/-1 counter on it, N +1/+1 and N -1/-1 counters are removed from it, where N is the smaller of the number of +1/+1 and -1/-1 counters on it.</p>
            <p>16. If the number of lore counters on a Saga permanent is greater than or equal to its final chapter number and it isn’t the source of a chapter ability that has triggered but not yet left the stack, that Saga’s controller sacrifices it.</p>
            <p className='mb-4'>17. If a player’s venture marker is on the bottommost room of a dungeon card, and that dungeon card isn’t the source of a room ability that has triggered but not yet left the stack, the dungeon card’s owner removes it from the game. </p>
            <p>This seems like a lot to do just to cast one spell, but this is simply the long explanation on how interaction works and how actions and effects resolve. Normally we would shorthand all this.</p>
            <p>Its not necassary to say I pass priority but instead you would cast something, ask if any one has a response then continue. Or you would say I hold priority if you want to continue. If you want to respond you would simply wait until the active player finishes casting then say, I have a repsonse.</p>
            <p>SBA and triggers rules are simply there for cleaning up the game and ensuring that when triggers go on the stack, they are in the correct order.</p>
        </div>
    );
};

export default Stack;
