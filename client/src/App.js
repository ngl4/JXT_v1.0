import React from "react";
import './App.css';
import InsertPage from "./components/DataInsert/InsertPage";
import TrackPage from "./components/Dashboard/TrackPage";
import Navbar from "./components/UI/navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())  
      .then((data) => setData(data.message));  
  });

  const linkStyle = {
    margin: "0rem",
    textDecoration: "none",
    color: 'white'
  };

  return (
    <div className="container-fluid">
      
      <header className="row m-5">
      <Router>
        <div>
          <Navbar
            RouterLinkHome = {<Link to="/" style={linkStyle}>JXT Job Tracker</Link>}
            RouterLinkEnter = {<Link to="/enter-page" style={linkStyle}>Enter</Link>}
            RouterLinkTrack = {<Link to="/track-page" style={linkStyle}>Track</Link>}
          />
        <Switch>
        <body className="row d-flex justify-content-center align-items-center mt-5">
          <Route exact path="/">
            <h1 className="text-center">Welcome to JXT Job Track App!</h1>
          </Route>
          <Route path="/enter-page">
            <InsertPage />
          </Route>
          <Route path="/track-page">
            <TrackPage />
          </Route>
          </body>
        </Switch>
        </div>
      </Router>
      </header>
      <footer className="fixed-bottom">
        <p className="cpText text-center mt-5">{ !data ? "Loading..." : data }</p>
      </footer>
    </div>
  );
}

export default App;
