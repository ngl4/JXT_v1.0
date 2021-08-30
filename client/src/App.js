import React from "react";
import './App.css';
import DummySignUpForm from "./components/Authentication/DummySignUpForm";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())  
      .then((data) => setData(data.message));  
  })

  return (
    <div className="container-fluid">
      <header className="row m-5">
        <h1 className="text-center">Welcome to JXT Job Track App</h1>
      </header>
      <body className="row d-flex justify-content-center align-items-center">
        <DummySignUpForm />
      </body>
      <footer>
        <p className="cpText text-center mt-5">{ !data ? "Loading..." : data }</p>
      </footer>
    </div>
  );
}

export default App;
