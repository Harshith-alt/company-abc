import React, { useState } from 'react';
import axios from 'axios';

function CMS() {
  const [newHeading, setNewHeading] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:8080/api/heading', { heading: newHeading })
      .then(() => alert('Heading saved successfully!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-10 shadow-lg rounded bg-white">
      <h2 className="text-2xl font-semibold mb-4">CMS: Update Heading</h2>
      <input
        type="text"
        value={newHeading}
        onChange={(e) => setNewHeading(e.target.value)}
        placeholder="Enter new heading"
        className="w-full border px-4 py-2 mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}

export default CMS;
