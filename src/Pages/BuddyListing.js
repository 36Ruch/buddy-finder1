import React, { useState } from 'react';
import Card from '../Components/Card';
import './BuddyListing.css';

const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/847/847969.png"; 

const initialBuddies = [
  { title: 'Amit', description: 'Web & Blockchain', image: defaultAvatar },
  { title: 'Sara', description: 'ML & Python', image: defaultAvatar },
  { title: 'Priya', description: 'UI/UX & React', image: defaultAvatar },
  { title: 'Rohan', description: 'Data Science', image: defaultAvatar },
  { title: 'Ananya', description: 'AI & Robotics', image: defaultAvatar },
  { title: 'Kabir', description: 'Cybersecurity', image: defaultAvatar }
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