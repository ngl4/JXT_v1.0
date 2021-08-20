// import logo from './logo.svg';
import React from "react";
import SimpleExp from "../src/components/Experiments/1_inputSubmitName"

function ExpApp() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())  
      .then((data) => setData(data.message));  
  })

  return (
    <div className="App">
      <SimpleExp />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>{ !data ? "Loading..." : data }</p>
      </header>
    </div>
  );
}

export default ExpApp;