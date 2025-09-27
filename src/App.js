import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import BuddyListing from "./Pages/BuddyListing";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buddies" element={<BuddyListing />} />
      </Routes>
    </Router>
  );
}

export default App;


