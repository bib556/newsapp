
import './App.css';
import Navbar from "./components/Navbar"
import React, {useState} from 'react'
import News  from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

//import <News setProgress ={setProgress} Item from './components/<News setProgress ={setProgress} Item';

const App = ()=>{
 const  apiKey = process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0)
 

    return (
      <div>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress}  apiKey ={apiKey}  key ="general"  pageSize={5} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress ={setProgress} apiKey ={apiKey} key ="business"  pageSize={5} country="in" category="business" />} />
          <Route path="/technology" element={<News setProgress ={setProgress} apiKey ={apiKey} key ="technology " pageSize={5} country="in" category="technology" />} />
          <Route path="/sports" element={<News setProgress ={setProgress} apiKey ={apiKey}  key ="sports " pageSize={5} country="in" category="sports" />} />
          <Route path="/health" element={<News setProgress ={setProgress} apiKey ={apiKey}  key ="Health" pageSize={5} country="in" category="Health" />} />
          <Route path="/Science" element={<News setProgress ={setProgress}  apiKey ={apiKey} key ="science" pageSize={5} country="in" category="science" />} />
          <Route path="/entertainment" element={<News setProgress ={setProgress} apiKey ={apiKey} key ="ntertainment" pageSize={5} country="in" category="entertainment" />} />
        </Routes>
      </Router>
    </div>
    
    )
  
}

export default App;

