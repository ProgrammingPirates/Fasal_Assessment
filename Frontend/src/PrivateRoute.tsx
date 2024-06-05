import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }: any) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element {...rest} /> : <Navigate to="/signin" />}
    />
  );
};

export default PrivateRoute;
