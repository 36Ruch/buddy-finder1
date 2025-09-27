import React, { useState } from 'react';
import './PostRequest.css';
const PostRequest = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [preferredGender, setPreferredGender] = useState('');
  const [college, setCollege] = useState(''); // <-- New state for college name
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request posted:\nName: ${name}\nAge: ${age}\nGender: ${gender}\nPreferred Gender: ${preferredGender}\nCollege: ${college}\nLocation: ${location}\nPurpose: ${description}`);
    setName('');
    setAge('');
    setGender('');
    setPreferredGender('');
    setCollege(''); // <-- Reset college name
    setLocation('');
    setDescription('');
  };
  return (
    <div className="postrequest-container">
      <h2>Post a Request</h2>
      <form className="postrequest-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
          min="1"
          required
        />
        <select
          value={gender}
          onChange={e => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select
          value={preferredGender}
          onChange={e => setPreferredGender(e.target.value)}
          required
        >
          <option value="">Preferred Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="No Preference">No Preference</option>
        </select>
        <input
          type="text"
          placeholder="College Name" // <-- New input for college name
          value={college}
          onChange={e => setCollege(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
        />
        <textarea
          placeholder="Purpose of Request (Description)"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};
export default PostRequest;

