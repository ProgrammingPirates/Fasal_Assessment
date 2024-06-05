import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListDetails: React.FC = () => {
  const { listId } = useParams<{ listId: string }>();
  const [list, setList] = useState<any>(null);

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/lists/${listId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setList(data);
    };
    fetchList();
  }, [listId]);

  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg">{list.name}</h3>
      <p>{list.visibility === 'public' ? 'Public' : 'Private'}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.movies.map((movie: any) => (
          <div key={movie.imdbID} className="border p-4 rounded">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover mb-2" />
            <h3 className="text-lg">{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDetails;
