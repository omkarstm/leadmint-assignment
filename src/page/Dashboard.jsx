import React from 'react';
import { Navigate } from 'react-router-dom';

function Dashboard() {
  const [isLoggedOut, setIsLoggedOut] = React.useState(false); 

  const handleLogout = () => {

    localStorage.removeItem('loggedInUser'); 

    setIsLoggedOut(true);
  };

  if (isLoggedOut) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard!</h1>
      <p>This is your protected page.</p>
      <a href='login' className="btn btn-primary" onClick={handleLogout}>Logout</a>
    </div>
  );
}

export default Dashboard;
