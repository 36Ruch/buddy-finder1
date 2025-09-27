import React from 'react';
import Card from '../Components/Card';
const events = [
  { title: 'Hackathon 2025', description: 'Join coding teams & win prizes!', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { title: 'Tech Workshop', description: 'Learn AI & ML with experts', image: 'https://randomuser.me/api/portraits/women/46.jpg' },
  { title: 'Design Sprint', description: 'UI/UX challenge & collaboration', image: 'https://randomuser.me/api/portraits/men/47.jpg' },
];
const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Connect & Collaborate at Campus Events</h1>
    <div className="card-row">
      {events.map((event, idx) => (
        <Card key={idx} {...event} />
      ))}
    </div>
  </div>
);
export default Home;
