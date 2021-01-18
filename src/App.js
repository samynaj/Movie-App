import React, { useState} from 'react'
import './App.css';

function App() {
  const [state, setState] = useState({search: "", result: {}, disabled: []});
  const [nominate, setNominate] = useState([])
  

  const handleChange = (event) => {
    setState({...state, search: event.target.value});
  };
  const handleClick = async (event) => {
    event.preventDefault();
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${state.search}`)
    const data = await res.json();
    setState({...state, result: data, disabled: new Array(data.Search.length).fill(false)})
  };
  const handleNominate = (idx) => {
    setNominate([...nominate, state.result.Search[idx]]);
    setState(state => {
      const disablebtns = [...state.disabled];
      disablebtns[idx] = true;
      return {
        ...state,
        disabled: disablebtns
      }
    })
  };
  return (
    <div className="app">
      <h1 className="app-header">The Shoppies</h1>
      <div className="app-search">
        <form className="app-search-form">
          <label className="app-search-form-label">Movie Title</label>
          <input className="app-search-form-input" type="text" placeholder="Search movie name" onChange={handleChange}/>
          <button className="app-search-form-button" type="button" onClick={handleClick}>Search</button>
        </form>
      </div>
      <div className="app-body">
        <div className="app-body-cardlist">
          <h3>Results for {state.search}</h3>
          {state.result.Search && state.result.Search.map((x, idx) => (
            <div className="app-body-cardlist-card" key={idx}>
              <h5>{x.Title}</h5>
              <p>{x.Year}</p>
              <button disabled={state.disabled[idx]} onClick={() => handleNominate(idx)}>Nominate</button>
          </div>
          ))}
        </div>
        <div className="app-body-nominate">
          <h3>Movies Nominated</h3>
          {
           nominate.length && nominate.map((y, idx) => (
              <div key={idx}>
                <h5>{y.Title}</h5>
                <p>{y.Year}</p>
                <button>Remove</button>
              </div>
            ))
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
