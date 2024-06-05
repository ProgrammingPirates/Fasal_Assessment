import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">Fasal Movies Assisment</Link>
        <div>
          {!isAuthenticated ? (
            <>
              <Link to="/signin" className="text-white ml-4">Sign In</Link>
              <Link to="/signup" className="text-white ml-4">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/lists" className="text-white ml-4">My Lists</Link>
              <Link to="/logout" className="text-white ml-4">Logout</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
