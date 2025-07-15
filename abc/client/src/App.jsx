import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/heading')
      .then(res => setHeading(res.data.heading))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 text-center">{heading || 'Loading...'}</h1>
    </div>
  );
}

export default App;
