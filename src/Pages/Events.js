import React from 'react';
import Card from '../Components/Card';
const events = [
  { title: 'Hackathon 2025', description: 'Join coding teams & win prizes!', image: '' },
  { title: 'Tech Workshop', description: 'Learn AI & ML with experts', image: '' },
  { title: 'Design Sprint', description: 'UI/UX challenge & collaboration', image: '' },
  { title: 'Startup Meetup', description: 'Network with young entrepreneurs', image: '' },
];
const Events = () => (
  <div className="home-container">
    <h1 className="home-title">Connect & Collaborate at Campus Events</h1>
    <div className="card-row">
      {events.map((event, idx) => (
        <Card key={idx} {...event} />
      ))}
    </div>
  </div>
);
export default Events;
