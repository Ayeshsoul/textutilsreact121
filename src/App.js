import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

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

  //const removeBodyClasses = () => {
  //  document.body.classList.remove('bg-light')
  //  document.body.classList.remove('bg-dark')
  //  document.body.classList.remove('bg-warning')
  //  document.body.classList.remove('bg-danger')
  //  document.body.classList.remove('bg-success')
  //}

  //DARK MODE
  const toggleMode = (cls) => {
    //removeBodyClasses();
    //document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000811";
      showAlert("Dark Mode has been switched", "success");
      //document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been switched", "success");
      //document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter basename="/textutilsreact121">
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route
              exact path="/textutilsreact121"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
