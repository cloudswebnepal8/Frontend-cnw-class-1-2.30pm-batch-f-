import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import About from './pages/About';
import Project from "./pages/Project"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />


    </>
  )
}

export default App