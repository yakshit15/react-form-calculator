import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector('#result').value = "";
  }, [])

  useEffect(() => {
    if (clear)
      document.querySelector('#result').value = "";
  })

  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector('#num').value
    if (currentNum === '')
      return;
    let sum = currentSum + parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value = "";

  }

  const Clear = (e) => {
    e.preventDefault();
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
  return (

    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
             
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="app-title">
                <h1> Basic Form Calculator for Addition</h1>
              </div>
              <form>
                <input type="text" id="result" value={currentSum} readOnly />
                <input type="text" id="num" placeholder="enter a number" />
                <button onClick={Add}>Add</button>
                <button onClick={Clear}>Clear</button>
              </form>
    </div>
  )

}

export default App;