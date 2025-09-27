import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import BuddyListing from "./Pages/BuddyListing";
import PostRequest from "./Pages/PostRequest";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buddies" element={<BuddyListing />} />
        <Route path="/postrequest" element={<PostRequest />} />
      </Routes>
    </Router>
  );
}
export default App;



