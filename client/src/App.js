import React from "react";
import './App.css';
import DummySignUpForm from "./components/Authentication/DummySignUpForm";
// import SuccessSignInPage from "./components/Experiments/2_successEnterPage";

function App() {
  const [data, setData] = React.useState(null);
  // const [signIn, setSignIn] = React.useState(false);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())  
      .then((data) => setData(data.message));  

    // fetch("/sign-in")
    //   .then((res) => res.json())  
    //   .then((data) => {
    //     if (data.message === "success"){
    //       setSignIn(true); 
    //     }
      // });  
  });

  return (
    <div className="container-fluid">
      <header className="row m-5">
        <h1 className="text-center">Welcome to JXT Job Track App</h1>
      </header>
      <body className="row d-flex justify-content-center align-items-center">
      <DummySignUpForm />
        {/* {!signIn ? <DummySignUpForm />: <SuccessSignInPage />} */}
      </body>
      <footer>
        <p className="cpText text-center mt-5">{ !data ? "Loading..." : data }</p>
      </footer>
    </div>
  );
}

export default App;
