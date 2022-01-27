import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("dark"); //Wheather Dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggoleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
      // document.title = "TextDocs - Light mode"
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#051727";
      showAlert("Dark mode has enabled", "success");
      // document.title = "TextDocs - Dark mode"
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextDocs"
        aboutText="About TextDocs"
        mode={Mode}
        toggoleMode={toggoleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={Mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextDocs - Word Counter , Character Counter and so on!" mode={Mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
