import React from 'react';
import '../App.css';
import MainContainer from './MainContainer';
import Axios from "axios";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:4000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });


  return (
    <div className="App">
      <h2>O R I E N T A T I O N</h2>
      <MainContainer />
      
    </div>

  );
}

export default App;
