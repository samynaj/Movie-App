import React, { useState, useEffect} from 'react'
import './App.css';

function App() {


  return (
    <div className="app">
      <h1 className="app-header">The Shoppies</h1>
      <div className="app-search">
        <form className="app-search-form">
          <label className="app-search-form-label">Movie Title</label>
          <input className="app-search-form-input" type="text" placeholder="Search movie name" />
          <button className="app-search-form-button" type="submit">Search</button>
        </form>
      </div>
      <div className="app-body">
        <div className="app-body-cardlist">
          <h3>Results for</h3>
          <div className="app-body-cardlist-card">
            <h5>Movie title</h5>
            <p>year</p>
            <button>Nominate</button>
          </div>
        </div>
        <div className="app-body-nominate">
          <h3>Movies Nominated</h3>
          <div>
            <h5>Movie title</h5>
            <p>year</p>
            <button>Remove</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
