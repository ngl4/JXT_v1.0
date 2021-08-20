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
      </header>
      <body>
      </body>
      <footer>
        <p className="cpText">{ !data ? "Loading..." : data }</p>
      </footer>
    </div>
  );
}

export default App;
