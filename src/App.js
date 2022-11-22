import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Pnf from './component/Pnf'
import Menu from './component/Header/Menu'
import About from './component/About'
import Profile from './component/Profile'
import Protfolio from './component/Portfolio'
import Footer from './component/Header/Footer'
import Contact from "./component/Contact"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/profile`} element={<Profile />} />
        <Route path={`/portfolio`} element={<Protfolio />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App