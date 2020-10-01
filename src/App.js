import React,{useState}from 'react';
import Nav from './Nav'
import './App.css';
import Header from './Header';
import Results from './Results'
import requests from './requests'

function App() {

const[selectedOption, setSelectedOption]=useState(requests.fetchTrending)


  return (
    <div className="App">
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
      {/*Header */}
      {/*Nav */}
      {/*Result */}
    </div>
  );
}

export default App;
