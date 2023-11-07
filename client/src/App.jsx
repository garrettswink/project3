// Package Imports
import { Route, Routes } from "react-router-dom"


// Import Style
import "./App.css"


// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"


// Import Pages
import Login from "./pages/Login"; 
import Tracker from "./pages/Tracker";
import History from "./pages/History";

function App() {
  
  return (
  
  <>
      {/* Components */}
      <Navbar />


      <Footer />
      
      {/* Routes */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </>
  );
}

export default App;