import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
import Header from "./components/header/Header";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <div className="App">
     <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>                         
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
