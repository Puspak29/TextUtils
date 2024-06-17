
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React, { useState } from 'react';



function App() {
  const [mode, setMode]= useState('dark');
  const [textCol, setTextCol]= useState('black');
  const [modename, setModename]= useState('Dark ')
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      setTextCol('white')
      setModename('Light ')
      document.body.style.backgroundColor='#121212'
    }
    else{
      setMode('dark')
      setTextCol('black')
      setModename('Dark ')
      document.body.style.backgroundColor='white'
    } 
  }
  return (
    <div className="App">
      <Navbar title="TextUtils" toggle={toggleMode} modeName={modename}></Navbar>
      <TextForm mode={mode} text={textCol}></TextForm>
    </div>
  );
}

export default App;
