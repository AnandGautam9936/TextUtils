import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light"); //wheather dark mode is enabled or not
  const[alert,setAlert]=useState("Welcome to TextUtils");
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    // setTimeout(() => {
    //   setAlert(null);
    // }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor=  '#0f2d5a';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} alert={alert} heading="Enter the text to Analyse" mode={mode}/>
      {/* <About/> */}
      {/* <Routes>
        <Route exact path="/" element={} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
