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
    </div>
  );
}

export default App;
