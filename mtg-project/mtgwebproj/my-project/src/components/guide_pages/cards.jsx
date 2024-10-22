import React from 'react';

const Cards = () => {
    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-2/3 h-full text-justify px-4'>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>There are two types of cards</h1>
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col items-center mx-4'>
                    <img className="" src="https://assets.moxfield.net/cards/card-naao3-normal.webp?105744983" alt="land" />
                    <h3 className='text-white'>Land</h3>
                </div>
                <div className='flex flex-col items-center mx-4'>
                    <img className="" src="https://assets.moxfield.net/cards/card-G445Z-normal.webp?127897617" alt="spells" />
                    <h3 className='text-white'>Spell</h3>
                </div>
            </div>
            <p className='mt-4'>Essentially, every card that is not a land is considered a spell. Cards are either permanent or non-permanent.</p>
            <p className=''>Non-permanent cards are only spells are sorceries and instants</p>
            <p className='mt-4'>Permanents cards include land and all other spells</p>
            <p>Cards have a name and a card type, it can also have a supertype, subtype, keywords, static abilties, triggered abilities, spell abilities and/or activated abilities.</p>
            <p className='mb-4'>Lets look at this example:</p>
            <div className='flex flex-col items-center mx-4'>
                <img src="https://assets.moxfield.net/cards/card-xRM4g-normal.webp?128117678" alt="Stella Lee" />
            </div>
            <p>From this card we get the following:</p>
            <p>Card Name : Stella Lee, Wild Card</p>
            <p>Card Type : Creature</p>
            <p>Supertype : Legendary</p>
            <p className='mb-4'>Subtype : Human, Rogue</p>
            <p>This card also has 2 abilities, a triggered and activated abilitiy. For Stella, the first paragraph is the triggered ability and the next paragraph with the symbol is the activated ability</p>
            <p>Essentially, if an effect starts with "when","whenever" or "at" then it is a triggered ability</p>
            <p>Activated abilities will come with a cost, which can be indicated with a tap symbol as seen on Stella Lee or mana symbols or simply asking for some payment.</p>
            <p className='mb-4'>Additionally, Mana abilities are activated abilities that create mana</p>
            <p className='mb-4'>Lets look at another card:</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img src="https://assets.moxfield.net/cards/card-mPMB0-normal.webp?128110429" alt="Valgavoth" />
            </div>
            <p className=''>As you can see, this card as two lines which only have 1 word on each. These are keywords and are Essentially abilities that are shorthanded.</p>
            <p>The keywords here are flying and ward. Flying is a static ability since its a property that will always be on which allows Valgavoth to only be blocked by creatures with flying and/or reach..</p>
            <p>Ward is a triggered ability that activates when Valgavoth is the target of a spell or ability and the number indicates a payment required to target Valgavoth</p>
            <p className='mb-4'>On the subject of static abilities, we can look at this last example:</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img src="https://assets.moxfield.net/cards/card-2zaj4-normal.webp?128112529" alt="Bello" />
            </div>
            <p>Bello only has one static ability but the way static abilites like this apply it's properties happens in layers. Note that this is only important when multiple static abilities are in play</p>
            <p className='mb-4'>Firstly they apply in order of Layers 1 to 7. Note that layers are also important for effects that change a cards property:</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img src="src/assets/layers.png" alt="Layer System" />
            </div>
            <p className='mb-4'>If there are multiple static ability changing the same layer, you would resolve them using timestamps, you apply the older one first then the newer one in order of when those effect came in play.</p>
            <p className='mb-4'>Lets look at one final example</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img src="https://assets.moxfield.net/cards/card-V2eqq-normal.webp?128092867" alt="kudo!" />
            </div>
            <p className='mb-4'>Kudo will initially apply its effect on layer 4, making things bears and then applies at layer 7 making things 2/2.</p>
            <p className='mb-4'>So why are layers important here? So if a card such as dressdown is used on Kudo</p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img src="https://assets.moxfield.net/cards/card-G4WAZ-normal.webp?128068837" alt="Dress Down" />
            </div>
            <p>It's static ability will apply on layer 6, but since Kudo's ability STARTED on layer 4, the layer previous, its whole effect will still apply</p>
            <p className='mt-4'>What about spell abilties, spell abilites are Essentially any ability that is not static,activated or a triggered ability such as this card: </p>
            <div className='flex flex-col items-center mx-4 mb-4'>
                <img src="https://assets.moxfield.net/cards/card-LKpyN-normal.webp?128099502" alt="True Polymorph" />
            </div>
            <p>What happens when this spell ability which changes a card's property is used on Kudo?</p>
            <p className='py-4'>Unlike in our dress down example, True Polymorph affects the card on layer 1, which since it is applied before Kudo's effect starts applying, Kudo's static ability will not apply</p>
        </div>
    );
};

export default Cards;
