import React, { useState } from 'react';

const CreateList: React.FC = () => {
  const [name, setName] = useState('');
  const [visibility, setVisibility] = useState('public');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/lists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ name, visibility }),
    });
    const data = await response.json();
    console.log(data);
    window.location.href = '/lists';
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl mb-4">Create List</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="List Name"
        className="block w-full p-2 mb-4 border rounded"
      />
      <select
        value={visibility}
        onChange={(e) => setVisibility(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
    </form>
  );
};

export default CreateList;
