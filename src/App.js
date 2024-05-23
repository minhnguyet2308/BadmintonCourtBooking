
import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Search from './components/Search';
import RecommendCourt from './components/RecommendCourt';
import SearchResults from './components/SearchResults';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './components/Login'; 
import Signup from './components/Signup'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
          <Banner />
        </header>

        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/" element={
            <>
              <Search onSearch={handleSearch} />
              {searchResults.length > 0 ? (
                <SearchResults results={searchResults} />
              ) : (
                <RecommendCourt />
              )}
            </>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;