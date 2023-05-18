
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import {useState} from "react"
import {BrowserRouter as Router ,Route, Routes} from "react-router-dom"
function App() {
  const [state,setState]=useState('')
  return (
    <div className="App">
      <button onClick={()=>setState("about")}>About</button>
      <button onClick={()=>setState("profile")}>Profile</button>
      <Router>
        <Routes>
          <Route Component={About} path='/about'/>
          <Route Component={Profile} path='/profile'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
