import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./pages/landingPage"; 
import Home from "./pages/homePage";

function App() {
  return (
    <Router> 
      <Routes> 
        <Route exact path="/" element={<Landing />} /> 
        <Route exact path="/appPages/homePage" element={<Home/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
