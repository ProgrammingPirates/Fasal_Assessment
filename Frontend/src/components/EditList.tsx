import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditList: React.FC = () => {
  const { listId } = useParams<{ listId: string }>();
  const [name, setName] = useState('');
  const [visibility, setVisibility] = useState('public');

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/lists/${listId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setName(data.name);
      setVisibility(data.visibility);
    };
    fetchList();
  }, [listId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/lists/${listId}`, {
      method: 'PUT',
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
      <h2 className="text-2xl mb-4">Edit List</h2>
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
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update</button>
    </form>
  );
};

export default EditList;
