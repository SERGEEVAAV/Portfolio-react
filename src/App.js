import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div className="App">
     
      {/* <Header/> */}
      {/* <Navbar/> */}
      <Home/>
      <Projects/>
      
      {/* <Contacts/> */}
      <Footer/>
     

    </div>
  );
}

export default App;
