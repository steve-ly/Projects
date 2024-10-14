import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rules from './components/rules';
import { Home } from './components/home';
import Deck from './components/decks';
import DeckList from './components/deckList';
import Matches from './components/matches';

const App = () => {
  return (
    <Router>
      <div className="bg-[url('assets/galaxy.jpg')] bg-cover bg-center min-h-screen bg-fixed">
        <Navbar />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/decks" element={<Deck />} /> 
            <Route path="/rules" element={<Rules />} /> 
            <Route path="/decks/:deckname" element={<DeckList />} /> 
            <Route path="/matches" element={<Matches />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
