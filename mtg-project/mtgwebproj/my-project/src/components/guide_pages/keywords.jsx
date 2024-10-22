import React from 'react';

const Keywords = () => {
    return (
        <div className='bg-black bg-opacity-60 mx-auto rounded-lg w-2/3 h-full p-2 text-left'>
            <h1 className='text-white text-balance tracking-tight sm:text-2xl mb-4 text-center'>Keywords Glossary</h1>
            <p>Some abilities are common and in order to save text size, they are shorthanded as a keyword.</p>
            <p className='mb-4'>Heres a list of current common keywords you may face when playing in this tournament:</p>
            <ul className="list-disc list-inside mb-4">
            <li>Deathtouch - Static ability where any damage dealt by this source to creature will be lethal</li>
            <li>Defender - Static ability that renders source unable to attack</li>
            <li>Double Strike - Static ability that allows creature to deal combat damage twice, once during first combat phase with creatures with double strike or first strike and again during normal combat phase</li>
            <li>Enchant - Static ability that restrics what an aura can target and attach to</li>
            <li>Equip - Activated ability that comes with a cost. Pay the cost to attach artifact to a creature, that creature is considered equipped and modified</li>
            <li>First Strike - Static ability, creatures with first strike deal combat damage before creatures with first strike</li>
            <li>Flash - Static ability that allows card to be cast at any time you could an instant</li>
            <li>Flying - Static ability that makes creatures without flying or reach unable to block creature</li>
            <li>Haste - Static ability that allows a creature to circumvent summoning sickeness, they can tap to attack or activate abilities when played</li>
            <li>Hexproof - Static ability that prevents a permanent or player from being the target of spells or abilities played by opponents</li>
            <li>Indestructible - Static ability where Indestructible permanents cannot be destroyed by rules or effects. They ignore effects that say destroy and ignore lethal damage marked on them</li>
            <li>Landwalk - Creature cannot be blocked as long as defender controls at least one specific land type</li>
            <li>Lifelink - Static ability where damage dealt by source with lifelink causes sources controller to gain that much life</li>
            <li>Protection - Static ability where This [object] can't be blocked, targeted, dealt damage, enchanted, or equipped by anything [quality]</li>
            <li>Reach - Static ability where creature can block as if it had flying</li>
            <li>Shroud - Static ability that prevents a permanent or player from being the target of spells and abilities</li>
            <li>Trample - Static ability where an attacker with trample deals excess damage to the defending player, planeswalker or battle even if it is blocked</li>
            <li>Vigilance - Static ability that allows creature to attack without tapping</li>
            <li>Ward- Triggered ability whenever a permanent with ward becomes the target of a spell or ability an opponent controls, counter it unless that player pays an additional cost.</li>
            <li>Cycling - Activated ability that allows a player to pay a cost that includes discarding the card. When the activated ability resolves, that player draws a card.</li>
            <li>Kicker - Static ability that allows the player to pay an optional cost when casting a spell to achieve an additional effect</li>
            <li>Flashback - Static ability on instants and sorceries that allows the player to pay an alternative cost to cast the spell directly from their graveyard. The spell card is exiled when the spell leaves the stack.</li>
            <li>Madness - Madness is a keyword that represents two abilities. The first is a static ability that functions while the card with madness is in a player’s hand. The second is a triggered ability that functions when the first ability is applied. “Madness [cost]” means “If a player would discard this card, that player discards it, but exiles it instead of putting it into their graveyard” and “When this card is exiled this way, its owner may cast it by paying [cost] rather than paying its mana cost. If that player doesn’t, they put this card into their graveyard.”</li>
            <li>Storm - Triggered ability that creates a copy of the spell when it's cast, for each spell cast before it in the current turn.</li>
            <li>Affinity - Static ability that reduces the mana cost of a spell by the number of permanents of a certain type that the player controls.</li>
            <li>Modular - Static and triggered ability. The first effect is static that causes a permanent to enter the battlefield with a number of +1/+1 counters. When that permanent dies, its controller may put a +1/+1 counter onto an artifact creature for each +1/+1 counter the permanent had on it when it died.</li>
            <li>Ninjutsu - Activated ability allowing a creature that attacks and isn't blocked to be exchanged with a Ninja in the controlling player's hand, such that the Ninja is attacking and unblocked instead of the original creature, which is returned to the owner's hand.</li>
            <li>Convoke - Static ability that allows a player to tap creatures rather than pay some of the mana cost of a spell. Each creature that is tapped pays for either {1} generic or one mana of one of the creature's colors.</li>
            <li>Dredge - Static ability where the owner of a card in a graveyard with Dredge can return the card to their hand by choosing to skip their draw and mill a number of cards.</li>
            <li>Split Second - Static ability where as long as this spell is on the stack, players can't cast spells or activate abilities that aren't mana abilities</li>
            <li>Suspend - Static and triggered ability.The first is a static ability that allows you to exile the card from your hand with the specified number of time counters (the number before the dash) on it by paying its suspend cost (listed after the dash). The second is a triggered ability that removes a time counter from the suspended card at the beginning of each of your upkeeps. The third is a triggered ability that causes you to cast the card when the last time counter is removed. If you cast a creature spell this way, it gains haste until you lose control of that creature</li>
            <li>Changeling - Characteristic-defining ability. “Changeling” means “This object is every creature type.” This ability works everywhere, even outside the game. </li>
            <li>Evoke - Static and triggered ability that allows a player to pay an alternative cost for a creature spell that possesses this ability; however, if the evoke cost is paid, the creature is sacrificed when it enters the battlefield.</li>
            <li>Hideaway - Triggered ability where when this permanent enters, look at the top N cards of your library. Exile one of them face down and put the rest on the bottom of your library in a random order. The exiled card gains ‘The player who controls the permanent that exiled this card may look at this card in the exile zone.’” </li>
            <li>Persist - Triggered ability where if the permanent with Persist dies, if it had no -1/-1 counters on it, return it to the battlefield with a -1/-1 counter on it</li>
            <li>Undying - Triggered ability When this creature dies, if it had no +1/+1 counters on it, return it to the battlefield under its owner's control with a +1/+1 counter on it.</li>
            <li>Wither - Static ability where damage dealt to a creature by a source with wither isn't marked on that creature. Rather, it causes that many -1/-1 counters to be put on that creature.</li>
            <li>Unearth - Activated ability Unearth returns a permanent to the battlefield and gives it haste, at the expense of the permanent being exiled at the end of turn.</li>
            <li>Cascade - Triggered ability When you cast a spell with Cascade, exile cards from the top of your library until you exile a nonland card whose mana value is less than the cascading spell. You may cast that card without paying its mana cost. Then put all cards exiled this way that weren't cast on the bottom of your library in a random order.</li>
            <li>Annihilator - Triggered ability Whenever this creature attacks, defending player sacrifices N permanents.</li>
            <li>Infect - Static ability A creature with infect deals damage to creatures in the form of -1/-1 counters and players in the form of poison counters</li>
            <li>Living weapon - Triggered ability, When this Equipment enters the battlefield, create a 0/0 black Phyrexian Germ creature token, then attach this Equipment to it.</li>
            <li>Miracle - Static and triggered ability, You may cast this card for its Miracle cost when you draw it if it's the first card you drew this turn.</li>
            <li>Overload - Static ability, You may cast this spell for its overload cost. If you do, change its text by replacing all instances of 'target' with 'each'.</li>
            <li>Unleash - Static ability, You may have this creature enter the battlefield with a +1/+1 counter on it. It can't block as long as it has a +1/+1 counter on it.</li>
            <li>Evolve - Triggered ability, Whenever a creature enters the battlefield under your control, if that creature has greater power or toughness than this creature, put a +1/+1 counter on this creature.</li>
            <li>Bestow - Static ability, If you cast this card for its bestow cost, it's an Aura spell with enchant creature. It becomes a creature again if it's not attached to a creature.</li>
            <li>Prowess - Triggered ability Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.</li>
            <li>Menace - Static ability, Creatures with menace can't be blocked except by two or more creatures.</li>
            <li>Devoid - Characteristic-defining keyword ability which states that a card is colorless, regardless of the colors in that card's mana cost.</li>
            <li>Myriad - Triggered ability Whenever this creature attacks, for each opponent other than defending player, you may create a token that's a copy of this creature that's tapped and attacking that player or a planeswalker they control. If one or more tokens are created this way, exile the tokens at end of combat.</li>
            <li>Emerge - Static ability You may cast this spell by sacrificing a creature and paying the emerge cost reduced by that creature's mana value.</li>
            <li>Crew - Activated ability Tap any number of other untapped creatures you control with total power N or greater: This permanent becomes an artifact creature until end of turn.</li>
            <li>Fabricate - Triggered ability When this permanent enters the battlefield, you may put N +1/+1 counters on it. If you don't, create N 1/1 colorless Servo artifact creature tokens.</li>
            <li>Escape - You may cast this card from your graveyard for its escape cost</li>
            <li>Reconfigure - Activate abilities Attach to target creature you control; or unattach from a creature. Reconfigure only as a sorcery. While attached this isn't a creature.</li>
            <li>Blitz - Static ability, If you cast this spell for its blitz cost, it gains haste and "When this creature dies, draw a card". Sacrifice it at the beginning of the next end step.</li>
            <li>Ravenous - Static and triggered ability, This creature enters the battlefield with X +1/+1 counters on it. If X is 5 or more, draw a card when it enters.</li>
            <li>Toxic - Static ability Players dealt combat damage by this creature also get N poison counter</li>
            <li>Plot - Static ability You may pay [cost] and exile this card from your hand. Cast it as a sorcery on a later turn without paying its mana cost. Plot only as a sorcery.</li>
            <li>Saddle - Activated ability Tap any number of other creatures you control with total power N or more: This Mount becomes saddled until end of turn. Saddle only as a sorcery</li>
            <li>Spree - Static ability Choose one or more additional costs.</li>
            <li>Gift - Static ability You may promise an opponent a gift as you cast this spell. If you do, they [get whatever you're gifting them].</li>
            <li>Freerunning - Static ability You may cast a spell for its freerunning cost if you dealt combat damage to a player this turn with an Assassin or commander.</li>
            <li>Offspring - Static and triggered ability You may pay an additional [cost] as you cast this spell. If you do, when this creature enters, create a 1/1 token copy of it.</li>
            <li>Impending - Static and triggered ability, If you cast this spell for its impending cost, it enters with N time counters and isn't a creature until the last is removed. At the beginning of your end step, remove a time counter from it.</li>
            <li>Ascend - Triggered ability if you control ten or more permanents, you get the city’s blessing for the rest of the game.</li>
            <li>Spectacle - Static ability You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn</li>
            <li>Morph - Static ability, you may cast this face down as a 2/2 creature for {3}. Turn it face up any time for its morph cost.</li>
            <li>Megamorph - Static ability, You may cast this card face down as a 2/2 creature for {3}. Turn it face up at any time for its megamorph cost and put a +1/+1 counter on it.</li>
            </ul>
            <p className='mb-4'>Additionally, there are also keyword action which are terms used to substitute a rule or type of action player takes:</p>
            <ul className="list-disc list-inside">
                <li>Attach - To move an Aura, Equipment, or Fortification onto another object or player</li>
                <li>Activate - To put an activated ability onto the stack and pay its costs, so that it will eventually resolve and have its effect</li>
                <li>Cast - When you cast a spell, you take it from where it is (usually the hand), put it on the stack, and pay its costs, so that it will eventually resolve and have its effect</li>
                <li>Counter -  A spell that is countered is put into the graveyard instead of doing its effect. It is essentially negated.</li>
                <li>Destroy - When a permanent is destroyed, it is moved from the battlefield to its owner’s graveyard. It is also the term used for creatures going to the graveyard due to lethal damage, including the reduced lethal damage threshold caused by Deathtouch.</li>
                <li>Discard - Put card from hand to graveyard</li>
                <li>Exile - is a game zone outside the field of play. It is also a keyword action, meaning "put into the exile zone".</li>
                <li>Fight - Each deals damage equal to its power to the other</li>
                <li>Mill - To describe the action of a player taking cards from the top of their library and putting them into their graveyard</li>
                <li>Play - Putting a land onto the battlefield from the hand. </li>
                <li>Regenerate - The next time this permanent would be destroyed this turn, it isn't. Instead tap it, remove all damage from it, and remove it from combat.</li>
                <li>Sacrifice - It means to move a permanent you control to its owner's graveyard.</li>
                <li>Scry - Look at the top N cards of your library, then put any number of them on the bottom of your library and the rest on top in any order.</li>
                <li>Clash - Each clashing player reveals the top card of their library, then puts that card on the top or bottom. A player wins if their card had a higher mana value.</li>
                <li>Proliferate - Choose any number of permanents and/or players, then give each another counter of each kind already there.</li>
                <li>Transform - means to turn a double-faced card on the back side, changing the card face that is visible.</li>
                <li>Populate - Create a token that's a copy of a creature token you control.</li>
                <li>Monstrosity - If this permanent isn't monstrous, put N +1/+1 counters on it and it becomes monstrous.</li>
                <li>Manifest - Put it onto the battlefield face down as a 2/2 creature. Turn it face up any time for its mana cost if it's a creature card.</li>
                <li>Manifest dread - Look at the top two cards of your library. Put one onto the battlefield face down as a 2/2 creature and the other into your graveyard. Turn it face up any time for its mana cost if it’s a creature card.</li>
                <li>Goad - Until your next turn, that creature attacks each combat if able and attacks a player other than you if able.</li>
                <li>Exert - An exerted permanent won't untap during your next untap step.</li>
                <li>Explore - Reveal the top card of your library. Put that card into your hand if it's a land. Otherwise, put a +1/+1 counter on this creature, then put the card back on top or into your graveyard.</li>
                <li>Surveil - Look at the top N cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order</li>
                <li>Adapt - If this creature has no +1/+1 counters on it, put N +1/+1 counter(s) on it.</li>
                <li>Amass - Put N +1/+1 counters on an Army you control. It’s also a [subtype]. If you don’t control an Army, create a 0/0 black [subtype] Army creature token first.</li>
                <li>Discover - Exile cards from the top of your library until you exile a nonland card with mana value N or less. Cast it without paying its mana cost or put it into your hand. Put the rest on the bottom in a random order.</li>
                <li>Suspect - A suspected creature has menace and can't block.</li>
                <li>Expend - You expend N as you spend your Nth total mana to cast spells during a turn</li>
            </ul>

        </div>
    );
};

export default Keywords;
