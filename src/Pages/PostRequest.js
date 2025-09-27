import React, { useState } from 'react';
import './PostRequest.css';

const PostRequest = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request posted: ${title} - ${details}`);
    setTitle('');
    setDetails('');
  };

  return (
    <div className="postrequest-container">
      <h2>Post a Request</h2>
      <form className="postrequest-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Request Title"
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required
        />
        <textarea 
          placeholder="Request Details" 
          value={details} 
          onChange={e => setDetails(e.target.value)} 
          required
        />
        <button type="submit">Post Request</button>
      </form>
    </div>
  );
};

export default PostRequest;