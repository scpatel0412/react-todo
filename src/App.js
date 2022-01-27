import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import FormOne from './FormOne';
import Demo from './Demo'


function App() {

  return (
   <div>
   <Router>
      <Routes>
      <Route exact path="/form" element={<FormOne/>} />
      {/* <Route path="/list" element={<ListOfLinks/>}/>
      <Route path="/nearby-objects" element={<AsteriodsNearBy/>}/> */}
      <Route exact path="/" element={<Demo/>} />
      </Routes>

    </Router>
   </div> 
  );
}

export default App;
