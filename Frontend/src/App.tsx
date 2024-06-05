import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Logout from './components/Logout';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import MovieLists from './components/MovieLists';
import CreateList from './components/CreateList';
import EditList from './components/EditList';
import ListDetails from './components/ListDetails';
import Navbar from './components/Navbar';

const PrivateRoute = ({ element: Element, ...rest }: any) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/signin" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<MovieSearch />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/logout" element={<PrivateRoute element={Logout} />} />
            <Route path="/lists" element={<PrivateRoute element={MovieLists} />} />
            <Route path="/lists/create" element={<PrivateRoute element={CreateList} />} />
            <Route path="/lists/:listId/edit" element={<PrivateRoute element={EditList} />} />
            <Route path="/lists/:listId" element={<PrivateRoute element={ListDetails} />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
