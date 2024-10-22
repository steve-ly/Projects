import { useState } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rules from './components/rules';
import Home from './components/home';
import Deck from './components/decks';
import DeckList from './components/deckList';
import Matches from './components/matches';
import Guide from './components/guide';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const correctPassword = "UNSW";
  const enablePasswordProtection = false; // Set to false to disable password protection

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password, please try again.");
    }
  };

  if (!isAuthenticated && enablePasswordProtection) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md text-center"
        >
          <h2 className="text-2xl mb-4 text-color-1">Enter Password</h2>
          <input
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="border border-gray-300 p-2 mb-4 w-full text-color-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

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
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
