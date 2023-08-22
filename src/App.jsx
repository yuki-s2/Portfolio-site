import "./App.css";
import "./Reset.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import { Route, Routes, useLocation } from "react-router-dom";
// import Motion from "./components/motion";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
const location = useLocation()

  return (
   
    <div className="App">
      <AnimatePresence>
      <Header />
      <Routes location={location} key={location.pathname}>
        {/* <Motion /> */}
        <Route path="/" element={ <Portfolio />} />
        <Route path="/Profile" element={ <Profile />} />
        <Route path="/Contact" element={ <Contact />} /> 
      </Routes>
      <Footer />
      </AnimatePresence>
    </div>    
  );
}


export default App;