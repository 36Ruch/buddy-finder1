import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Events from "./Pages/Events";
import BuddyListing from "./Pages/BuddyListing";
import PostRequest from "./Pages/PostRequest";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<Events />} /> 
        <Route path="/buddies" element={<BuddyListing />} />
        <Route path="/post" element={<PostRequest />} />
      </Routes>
    </Router>
  );
}
export default App;
