import { useState } from 'react'
import Navbar from './Components/Navbar'
import Workspace from './Components/Workspace';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Hero from './Components/Hero'
import Articles from './Components/Articles'
import Footer from './Components/Footer'
import ArticleDetail from './Components/ArticleDetail';
import LoginSignupPage from './Components/LoginSignup';

function App() {

  return (
  <Router>
  <Navbar/>
  <Routes>
  <Route exact path="/" element={<Articles />} />
  <Route exact path="/articleDetail" element={<ArticleDetail />} />
  {/* This would be Protected Route */}
  <Route exact path="/create" element={<Workspace />} />
  <Route exact path="/auth" element={<LoginSignupPage />} />
  
  </Routes>
  <Footer/>
  </Router>
  )
}

export default App
