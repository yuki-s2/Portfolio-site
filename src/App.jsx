import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Portfolio />} />
        <Route path="/Profile" element={ <Profile />} />
        <Route path="/Contact" element={ <Contact />} /> 
      </Routes>
    </div>
    </Router>
    
  );
}


export default App;