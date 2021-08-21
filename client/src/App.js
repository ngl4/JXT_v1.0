import React from "react";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())  
      .then((data) => setData(data.message));  
  })

  return (
    <div className="App">
      <header className="App-header">
        <p className="cpText">{ !data ? "Loading..." : data }</p>
      </header>
      <body>
      </body>
      <footer>
      </footer>
    </div>
  );
}

export default App;
