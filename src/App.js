import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AuthForm from './component/Form';
import Dashboard from './page/Dashboard';
import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const defaultUser = {
    email: "default@example.com",
    password: "password123",
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleFormSubmit = (email, password) => {
    if (email === defaultUser.email && password === defaultUser.password) {
      localStorage.setItem('loggedInUser', email);
      setIsLoggedIn(true);
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser && storedUser.password === password) {
      localStorage.setItem('loggedInUser', email);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleAccountCreated = () => {
    setAccountCreated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <AuthForm isSignUp={false} onSubmit={handleFormSubmit} />}
        />

        <Route
          path="/signup"
          element={
            accountCreated ? (
              <Navigate to="/login" />
            ) : (
              <AuthForm isSignUp={true} onSubmit={handleFormSubmit} onAccountCreated={handleAccountCreated} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
