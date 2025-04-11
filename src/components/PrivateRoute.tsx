
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ 
  children, 
  redirectTo = '/login' 
}) => {
  const { currentUser, loading } = useAuth();
  
  console.log("PrivateRoute - loading:", loading, "currentUser:", currentUser?.email);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-retro-dark">
        <div className="text-retro-purple-200 font-pixel text-xl animate-pulse">Loading...</div>
      </div>
    );
  }
  
  return currentUser ? <>{children}</> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
