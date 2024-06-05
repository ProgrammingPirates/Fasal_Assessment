import React from 'react';

interface ListItemProps {
  movie: any;
  onRemove: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ movie, onRemove }) => {
  return (
    <div className="border p-4 rounded">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover mb-2" />
      <h3 className="text-lg">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={onRemove} className="bg-red-500 text-white p-2 rounded">
        Remove
      </button>
    </div>
  );
};

export default ListItem;
