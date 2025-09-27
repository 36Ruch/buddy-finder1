import React, { useState } from 'react';
import Card from '../Components/Card';
import './BuddyListing.css';

const initialBuddies = [
  { title: 'Amit', description: 'Web & Blockchain', image: 'https://i.pravatar.cc/80?img=1' },
  { title: 'Sara', description: 'ML & Python', image: 'https://i.pravatar.cc/80?img=2' },
  { title: 'Priya', description: 'UI/UX & React', image: 'https://i.pravatar.cc/80?img=3' },
  { title: 'Rohan', description: 'Data Science', image: 'https://i.pravatar.cc/80?img=4' },
  { title: 'Ananya', description: 'AI & Robotics', image: 'https://i.pravatar.cc/80?img=5' },
  { title: 'Kabir', description: 'Cybersecurity', image: 'https://i.pravatar.cc/80?img=6' }
];
const BuddyListing = () => {
  const [buddies] = useState(initialBuddies);
  return (
    <div className="buddy-listing-container">
      <h1 className="buddy-title">Campus Event Buddies</h1>
      <div className="card-row">
        {buddies.map((buddy, idx) => (
          <Card key={idx} {...buddy} showConnect={true} />
        ))}
      </div>
    </div>
  );
};
export default BuddyListing;

