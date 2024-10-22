import React from 'react';

const Types = () => {
    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-2/3 h-full p-2 text-left'>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Card Types</h1>
            <p>Cards can have one or more of either the permanent types Land,Creature,Artifact,Enchantment,Planeswalker and battle or one of non-permanent spell types, Instant or sorcery</p>
            <p className='mb-4'>Cards can be artifact creatures, artifact lands, enchantment creatures etc. Additionally cards can have kindred, which simply means the card regardless of its card type,  shares its subtypes with the creature card type</p>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Lands</h1>
            <p className='mb-4'>Lands can come as one of the 5 basic land types, although the card may not contain any text, basic lands will tap for one mana of their corresponding colour and have the supertype "Basic". Although many lands generate specific colors of mana, lands are colorless on their own</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-2za01-normal.webp?107498231" alt="land" />
            </div>
            <p className='mb-4'>Non-basic lands are lands that will have text to describe what they can do, so like any other spell card</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-MxmRV-normal.webp?107505064" alt="land" />
            </div>
            <p className='mb-4'>Legendary lands act as any normal land except they follow the legends rule</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-E56zP-normal.webp?126198855" alt="land" />
            </div>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Creatures</h1>
            <p className='mb-4'>Creatures can have multiple additional types such as artifact or enchantment. Additionally Creatures can be legendary and will therefore follow the creature rule. In terms of subtypes, there are over 275 of them.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-dXpBx-normal.webp?128465701" alt="creature" />
            </div>
            <p>Creatures are unique in the fact that they will always have a power/toughness attribute on the bottom right corner. They are the only permanents that can attack and block</p>
            <p className='mb-4'>Creatures are the only permanents that have summoning sickness. This means a creature cannot attack or use activated abilities either with the tap or untap symbol if it has not been continuously controlled by a player since the beginning of that player's most recent turn.</p>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Artifacts</h1>
            <p>Artifacts are simply permanents that stay on the field. They are suppose to represent items,objects or weapons. Artifacts can have the supertype legendary.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-g3bjx-normal.webp?121341179" alt="artifact" />
            </div>
            <p className='mb-4'>A subtype artifacts can have is equipments, which means that you can pay an equip cost to attach the artifact to a creature you control. That creature will be considered equipped with this artifact. Addtionally, if an equipped creature is destroyed or no longer in play, the artifact will remain on the field. Paying the equip cost also allows for the equipment to move between creatures. Note paying the cost can only be done at sorcery speed</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-zbWD8-normal.webp?128484321" alt="artifact" />
            </div>
            <p>Another subtype artifacts can have is Vehicle. Vehicle artifacts will have power/toughness on the card. However, vehicles can become a creature with this power and toughness if you pay the crew cost which is an activated ability. Paying the cost will turn this card into an artifact creature until the end of turn.</p>
            <p className='mb-4'>If you don't crew the artifact, it will simply remain an artifact and will not get the power or toughness on the card. To crew a vehicle, simply Tap any number of other untapped creatures you control with total power N or greater where N is the crew cost.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-AW8J5-normal.webp?128452348" alt="artifact" />
            </div>
            <p className='mb-4'>Lastly, there are fortification artifacts that act the same as equipment except you can only attach it to lands and except for an equip cost, its called fortify.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-KPxn0-normal.webp?128440750" alt="artifact" />
            </div>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Enchantments</h1>
            <p className='mb-4'>Enchantments are generally similar to normal artifacts where they are permanent cards that remain in play normally indefinetely. They represent persistent magical effects.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-01oOe-normal.webp?128348997" alt="enchantment" />
            </div>
            <p className='mb-4'>Auras are enchantments that act similar to that to equipment. Auras however requires a legal target to be cast and is instantly attached to the target when resolved. Auras will have the keyword action enchant which determines its legal target. An attached creature will be considered enchanted. If the target is removed from play, the aura will also be removed from play. Additionally, so long as the target is legal, the target does not need to be a permanent you control.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-XdoAG-normal.webp?128440617" alt="enchantment" />
            </div>
            <p className='mb-4'>Backgrounds are an enchantment type that, in combination with the “choose a Background” ability, may allow a legendary enchantment card to be your commander. Other than that, they work as any other enchantment</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-WaVMG-normal.webp?128442583" alt="enchantment" />
            </div>
            <p>Saga's are enchantments that have different steps to them. They are considered "historic". When a saga enters, you put a lore counter on it. After each draw step, you would put add an additional lore counter.</p>
            <p>Putting a lore counter on a Saga in either of these ways doesn't use the stack. Each symbol on the left of a Saga's text box represents a chapter ability. A chapter ability is a triggered ability that triggers when a lore counter that is put on the Saga causes the number of lore counters on the Saga to become equal to the ability's chapter number. Chapter abilities are put onto the stack and may be responded to.</p>
            <p className='mb-4'> If the number of lore counters on a Saga permanent is greater than or equal to its final chapter number, and it isn’t the source of a chapter ability that has triggered but not yet left the stack, that Saga’s controller sacrifices it. This state-based action doesn’t use the stack.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-N920Z-normal.webp?128484529" alt="enchantment" />
            </div>
            <p>Classes are enchantments with a level up system. They are similar to that of sagas with steps.</p>
            <p>The first Class ability is active as long as you control the Class. The next two are activated abilities that allow it to level up. Class abilities are activated at sorcery speed, meaning during your main phase if the stack is empty. As mana is paid for the second ability, the Class will become level 2 and the first two class abilities are active. If a Class is level 2, you can activate the level 3 ability. Note that you can only activate a Class's level 3 ability if the Class is level 2.</p>
            <p className='mb-4'>A Class's level isn't tracked with or represented by counters. A Class's level is just something true about the permanent.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-Q42JD-normal.webp?128466725" alt="enchantment" />
            </div>
            <p>Another enchantment that is similar in nature to sagas and classes are cases. Not as common but a bit easier to understand.</p>
            <p className='mb-4'>When the case is first cast, it is considered unsolved. It is split into 3 parts. The first step is always active regardless. The 2nd middle part will indicate what is required to make the case solved. The last part is the result/reward when the case becomes solved</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-2zyNB-normal.webp?128473031" alt="enchantment" />
            </div>
            <p className='mb-4'>Lastly, there are also rooms, which are split cards that show two rooms. To play, you would pick one initial room to "unlock" and that side will be in play. Additionally, as a sorcery, the player may choose to pay the cost of the other side to unlock that room, allowing it to come into effect</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-J9qJN-normal.webp?12574017" alt="enchantment" />
            </div>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Battle</h1>
            <p>Battles currently only have one subtype, sieges. They are permanents that can be played like any other creature or sorcery spell</p>
            <p>A battle is placed horizontally on the battlefield. Each battle enters the battlefield with defense counters on it equal to its defense, found in the lower right corner of the front face. This shows how much damage it takes to defeat that battle. Any damage dealt to a battle causes that many defense counters to be removed from it. When a battle's defense reaches 0, the battle is defeated and rewards its controller.</p>
            <p>For sieges, as it enters, choose an opponent to protect it. You and others can attack it. When it's defeated, exile it, then you may cast it transformed.</p>
            <p className='mb-4'>Controllers of the battle/siege can block attackers targeting it</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-face-kyVg0-normal.webp?128468761" alt="enchantment" />
            </div>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Planeswalker</h1>
            <p>The last of the permanents, Planeswalker are permanents that are similar to battles where they can be the target of attacks and can be blocked for. They are suppose to represent players. A planeswalker can be attacked, like a player, or be damaged by an opponent's spell or ability.</p>
            <p>Any damage dealt to planeswalkers removes that many loyalty counters and a planeswalker with no loyalty counters is put into the graveyard.</p>
            <p>Planeswalkers normally have 3 abilities, the last one refered to as their ultimate like in league. The cost of the ability will be on the left hand side and will often add or remove loyalty counters</p>
            <p className='mb-4'>A player may activate a loyalty ability of a permanent they control any time they have priority and the stack is empty during a main phase of their turn, but only if none of that permanent’s loyalty abilities have been activated that turn.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-xRGvR-normal.webp?128474249" alt="enchantment" />
            </div>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Sorceries and Instants</h1>
            <p>Sorceries are non-permanent spells that when resolved, go to the graveyard. They act similar to spell cards in Yugioh or hearthstone.</p>
            <p>A player who has priority may cast a sorcery card from their hand during a main phase of their turn when the stack is empty. Casting a sorcery as a spell uses the stack.</p>
            <p className='mb-4'>Sorceries can’t enter the battlefield. If a sorcery would enter the battlefield, it remains in its previous zone instead.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-r8v2n-normal.webp?128484317" alt="enchantment" />
            </div>
            <p>Instants are the as sorceries but instead players only need priority in order to cast it.A player who has priority may cast an instant card from their hand. Casting an instant as a spell uses the stack. </p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-3q9A1-normal.webp?127657305" alt="enchantment" />
            </div>
            <p>Instants and Sorceries share subtypes known as spell types. Additionally, sorceries and instants can appear as split cards like rooms, but you can only choose 1 dide to have its effect cast </p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-7vNOp-normal.webp?128479356" alt="enchantment" />
            </div>
            <p>Adventures are spell types that are attached to permanent cards. Casting the Adventure half of a card represents going on an Adventure</p>
            <p className='mb-4'>When the Adventure resolves, the card is exiled. When exiled as part of the resolution, the permanent spell may be cast from exile. Adventure spells only exist on the stack. In all other zones, the characteristics of an Adventure are ignored; only the characteristics of the permanent apply.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-7vwxp-normal.webp?128442552" alt="enchantment" />
            </div>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Other Stuff</h1>
            <p className='mb-4'>While not considered card types, there are additional cards/items within Magic.</p>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Tokens</h1>
            <p>Tokens are permanents that can be any of the permanent card types. Normally tokens can exist only on the battlefield. If a token leaves the battlefield and goes to another game zone, it can't change zones again, and it will be there only briefly before a state-based action makes it cease to exist. </p>
            <p>Artifact tokens may have predefined subtypes: Blood, Clue, Food, Gold, Incubator, Junk, Map, Powerstone, Treasure.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-3qOBN-normal.webp?105862974" alt="enchantment" />
            </div>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Emblems</h1>
            <p>An emblem is different from a card or a token. The ability and the controlling player are the only characteristics it has. Emblems have no color, card type, or anything else — just that ability. They are placed in the command zone</p>
            <p>An emblem is not a permanent, and absolutely nothing can touch it or get rid of it as long as the player who gained it remains in the game, simply because no cards say that they can.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-face-LKllz-normal.webp?105862998" alt="enchantment" />
            </div>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Dungeons</h1>
            <p>Dungeons are rare especially in this tournament so you can choose to ignore this. They are actual cards, but they don’t go in your deck.They start outside the game and are played in the command zone.</p>
            <p>You always have access to all three dungeons, and you'll never need more than one of the same one.</p>
            <p>They are brought into the game using the venture into the dungeon keyword action. A dungeon card that’s brought into the game is put into the command zone until it leaves the game.</p>
            <p>Dungeon cards are not permanents. They can’t be cast. Dungeon cards can’t leave the command zone except as they leave the game.</p>
            <p>A player can own only one dungeon card in the command zone at a time, and they can’t bring a dungeon card into the game if a dungeon card they own is in the command zone. Each dungeon card has a series of rooms connected to one another with arrows. A player uses a venture marker placed on the dungeon card they own to indicate which room they are currently in. As a player puts a dungeon they own into the command zone, they put their venture marker on the topmost room.</p>
            <p>Each room has a triggered ability called a room ability whose effect is printed on the card. They all have the same trigger condition not printed on the card. The full text of each room ability is “When you move your venture marker into this room, [effect.]” As long as a dungeon card is in the command zone, its abilities may trigger. Each room ability is controlled by the player who owns the dungeon card that is that ability’s source.</p>
            <p>The venture into the dungeon keyword action allows players to move their venture marker down the rooms of a dungeon card.</p>
            <p>If a player ventures into the dungeon while they own a dungeon card in the command zone and their venture marker isn’t on that dungeon’s bottommost room, they move their venture marker from the room it is on to the next room, following the direction of an arrow pointing away from the room their venture marker is on. If there are multiple arrows pointing away from the room the player’s venture marker is on, they choose one of them to follow.</p>
            <p>If a player ventures into the dungeon while they own a dungeon card in the command zone and their venture marker is on that dungeon card’s bottommost room, they remove that dungeon card from the game. They then choose a dungeon card they own from outside the game and put it into the command zone. They put their venture marker on the topmost room.</p>
            <p>If a player’s venture marker is on the bottommost room of a dungeon card, and that dungeon card isn’t the source of a room ability that has triggered but not yet left the stack, the dungeon card’s owner removes it from the game.</p>
            <p>A player completes a dungeon as that dungeon card is removed from the game.</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img className="w-1/3" src="https://assets.moxfield.net/cards/card-face-EbO9g-normal.webp?119236202" alt="enchantment" />
            </div>
        </div>
    );
};

export default Types;
