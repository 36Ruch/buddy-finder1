import React from "react";
import NavbarMinimal from "../Components/NavbarMinimal";


const Home = () => {
  return (
    <>
      <NavbarMinimal />
      <div className="home-container">
        <h1 className="home-title">Connect & Collaborate at Campus Events</h1>
        <p className="home-subtitle">
          Discover events, find buddies, and collaborate with like-minded students on campus.
        </p>
      </div>
    </>
  );
};

export default Home;