import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieLists: React.FC = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/lists`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setLists(data);
    };
    fetchLists();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">My Movie Lists</h2>
      <Link to="/lists/create" className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">Create New List</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {lists.map((list: any) => (
          <div key={list._id} className="border p-4 rounded">
            <Link to={`/lists/${list._id}`}>
              <h3 className="text-lg">{list.name}</h3>
              <p>{list.visibility === 'public' ? 'Public' : 'Private'}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieLists;
