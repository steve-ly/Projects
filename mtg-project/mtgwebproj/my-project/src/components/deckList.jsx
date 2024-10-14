import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import DescBox from './DescBox';
import StatsAndMatches from './statsmatches';

const DeckList = () => {
  const location = useLocation(); // Get the current location
  const deckListName = `${location.pathname}`.substring(7);
  const [cards, setCards] = useState([]);
  
  // State for visibility of each section
  const [isCreaturesVisible, setCreaturesVisible] = useState(false);
  const [isSorceriesVisible, setSorceriesVisible] = useState(false);
  const [isInstantsVisible, setInstantsVisible] = useState(false);
  const [isArtifactsVisible, setArtifactsVisible] = useState(false);
  const [isEnchantmentsVisible, setEnchantmentsVisible] = useState(false);
  const [isLandsVisible, setLandsVisible] = useState(false);
  const [isPlaneswalkersVisible, setPlaneswalkersVisible] = useState(false);

  // Refs for each section
  const creaturesRef = useRef(null);
  const sorceriesRef = useRef(null);
  const instantsRef = useRef(null);
  const artifactsRef = useRef(null);
  const enchantmentsRef = useRef(null);
  const landsRef = useRef(null);
  const planeswalkersRef = useRef(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch(`/${deckListName}.json`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [deckListName]);

  // Toggle visibility functions
  const toggleCreatures = () => setCreaturesVisible(!isCreaturesVisible);
  const toggleSorceries = () => setSorceriesVisible(!isSorceriesVisible);
  const toggleInstants = () => setInstantsVisible(!isInstantsVisible);
  const toggleArtifacts = () => setArtifactsVisible(!isArtifactsVisible);
  const toggleEnchantments = () => setEnchantmentsVisible(!isEnchantmentsVisible);
  const toggleLands = () => setLandsVisible(!isLandsVisible);
  const togglePlaneswalkers = () => setPlaneswalkersVisible(!isPlaneswalkersVisible);

  return (
    <div className="flex flex-col items-center justify-center text-white h-full p-4">
      <h1 className="text-white text-balance text-4xl font-bold tracking-tight sm:text-6xl mb-4">
        {cards.DeckName}
      </h1>
      <div className='flex flex-row justify-between h-full w-full mt-10'>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className='text-3xl mb-4'>Commander</h2> 
          <div className="flex flex-col items-center w-1/3">
            {cards.Commander && cards.Commander.map((card, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <img src={card["Image Source"]} alt={card["Alt Text"]} className="w-auto h-auto object-cover mb-2" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className='text-3xl mb-4'>Backup Commander</h2>
          <div className="flex flex-col items-center w-1/3">
            {cards.BackUp && cards.BackUp.map((card, index) => (
              <div key={index} className="flex flex-col items-center mb-4"> 
                <img src={card["Image Source"]} alt={card["Alt Text"]} className="w-auto h-auto object-cover mb-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Creatures Section */}
      <div className='mt-5 w-full p-4'>
        <h2 
          onClick={toggleCreatures} 
          className="text-3xl text-center mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Creatures
        </h2>
        <div 
          ref={creaturesRef}
          style={{
            maxHeight: isCreaturesVisible ? `${creaturesRef.current.scrollHeight}px` : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          <div className="flex justify-center"> {/* Center the grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-2/3">
              {cards.Creatures && cards.Creatures.map((creature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img 
                    src={creature["Image Source"]} 
                    alt={creature["Alt Text"]} 
                    className="w-full h-auto object-cover rounded" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> {/* Closing the creatures div */}

      {/* Sorceries Section */}
      <div className='mt-5 w-full p-4'>
        <h2 
          onClick={toggleSorceries} 
          className="text-3xl text-center mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Sorceries
        </h2>
        <div 
          ref={sorceriesRef}
          style={{
            maxHeight: isSorceriesVisible ? `${sorceriesRef.current.scrollHeight}px` : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          <div className="flex justify-center"> {/* Center the grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-2/3">
              {cards.Sorceries && cards.Sorceries.map((sorcery, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img 
                    src={sorcery["Image Source"]} 
                    alt={sorcery["Alt Text"]} 
                    className="w-full h-auto object-cover rounded" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> {/* Closing the sorceries div */}

      {/* Instants Section */}
      <div className='mt-5 w-full p-4'>
        <h2 
          onClick={toggleInstants} 
          className="text-3xl text-center mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Instants
        </h2>
        <div 
          ref={instantsRef}
          style={{
            maxHeight: isInstantsVisible ? `${instantsRef.current.scrollHeight}px` : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          <div className="flex justify-center"> {/* Center the grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-2/3">
              {cards.Instants && cards.Instants.map((instant, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img 
                    src={instant["Image Source"]} 
                    alt={instant["Alt Text"]} 
                    className="w-full h-auto object-cover rounded" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> {/* Closing the instants div */}

      {/* Artifacts Section */}
      <div className='mt-5 w-full p-4'>
        <h2 
          onClick={toggleArtifacts} 
          className="text-3xl text-center mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Artifacts
        </h2>
        <div 
          ref={artifactsRef}
          style={{
            maxHeight: isArtifactsVisible ? `${artifactsRef.current.scrollHeight}px` : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          <div className="flex justify-center"> {/* Center the grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-2/3">
              {cards.Artifacts && cards.Artifacts.map((artifact, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img 
                    src={artifact["Image Source"]} 
                    alt={artifact["Alt Text"]} 
                    className="w-full h-auto object-cover rounded" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> {/* Closing the artifacts div */}

      {/* Enchantments Section */}
      <div className='mt-5 w-full p-4'>
        <h2 
          onClick={toggleEnchantments} 
          className="text-3xl text-center mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Enchantments
        </h2>
        <div 
          ref={enchantmentsRef}
          style={{
            maxHeight: isEnchantmentsVisible ? `${enchantmentsRef.current.scrollHeight}px` : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          <div className="flex justify-center"> {/* Center the grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-2/3">
              {cards.Enchantments && cards.Enchantments.map((enchantment, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img 
                    src={enchantment["Image Source"]} 
                    alt={enchantment["Alt Text"]} 
                    className="w-full h-auto object-cover rounded" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> {/* Closing the enchantments div */}

      {/* Lands Section */}
      <div className='mt-5 w-full p-4'>
        <h2 
          onClick={toggleLands} 
          className="text-3xl text-center mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Lands
        </h2>
        <div 
          ref={landsRef}
          style={{
            maxHeight: isLandsVisible ? `${landsRef.current.scrollHeight}px` : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          <div className="flex justify-center"> {/* Center the grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-2/3">
              {cards.Lands && cards.Lands.map((land, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img 
                    src={land["Image Source"]} 
                    alt={land["Alt Text"]} 
                    className="w-full h-auto object-cover rounded" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> {/* Closing the lands div */}

      {/* Planeswalkers Section */}
      {cards.Planeswalkers && cards.Planeswalkers.length > 0 && (
        <div className='mt-5 w-full p-4'>
          <h2 
            onClick={togglePlaneswalkers} 
            className="text-3xl text-center mb-4 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Planeswalkers
          </h2>
          <div 
            ref={planeswalkersRef}
            style={{
              maxHeight: isPlaneswalkersVisible ? `${planeswalkersRef.current.scrollHeight}px` : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease-in-out',
            }}
          >
            <div className="flex justify-center"> {/* Center the grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-2/3">
                {cards.Planeswalkers.map((planeswalker, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img 
                      src={planeswalker["Image Source"]} 
                      alt={planeswalker["Alt Text"]} 
                      className="w-full h-auto object-cover rounded" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> // Closing the planeswalkers div
      )}
      <DescBox></DescBox>
      <StatsAndMatches deckName={cards.DeckName}></StatsAndMatches>
    </div>
  );
};

export default DeckList;
