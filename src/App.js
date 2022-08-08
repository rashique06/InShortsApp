import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Footer from './Component/Footer';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar/>
        {/* <News key="general" pageSize={20} category='general'/> */}
        <Routes>
          <Route  path="/" element={<News key="general" pageSize={12} category='general'/>}/>
          <Route  path="/business" element={<News key="business" pageSize={12} category='business'/>}/>
          <Route  path="/entertainment" element={<News key="entertainment" pageSize={12} category='entertainment'/>}/>
          <Route  path="/general" element={<News key="general" pageSize={12} category='general'/>}/>
          <Route  path="/health" element={<News key="health" pageSize={12} category='health'/>}/>
          <Route  path="/science" element={<News key="science" pageSize={12} category='science'/>}/>
          <Route  path="/sports" element={<News key="sports" pageSize={12} category='sports'/>}/>
          <Route  path="/technology" element={<News key="technology" pageSize={12} category='technology'/>}/>
        </Routes>
        <Footer/>
        </div>
      </Router>
    )
  }
}

