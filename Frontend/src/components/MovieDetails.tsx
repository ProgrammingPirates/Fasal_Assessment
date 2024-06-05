import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=3e6b0b4a`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border p-4 rounded">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover mb-2" />
      <h3 className="text-lg">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
