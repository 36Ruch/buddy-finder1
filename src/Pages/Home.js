import React from 'react';
import Card from '../Components/Card';

const events = [
  { title: 'Hackathon 2025', description: 'Join coding teams & win prizes!', image: 'https://i.pravatar.cc/80?img=1' },
  { title: 'Tech Workshop', description: 'Learn AI & ML with experts', image: 'https://i.pravatar.cc/80?img=2' },
  { title: 'Design Sprint', description: 'UI/UX challenge & collaboration', image: 'https://i.pravatar.cc/80?img=3' },
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
