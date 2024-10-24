import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AUTH_IMG from "../assets/auth.jpg";

function AuthForm({ isSignUp, onSubmit, onAccountCreated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!password) {
      formErrors.password = 'Password is required';
      isValid = false;
    } else if (isSignUp && password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (isSignUp && password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isSignUp) {
        const existingUser = localStorage.getItem(email);
        if (existingUser) {
          setErrors({ email: 'Email already exists' });
        } else {
          localStorage.setItem(email, JSON.stringify({ email, password }));
          alert('Account created successfully! You can now log in.');

          if (onAccountCreated) {
            onAccountCreated();
          }
        }
      } else {
        const storedUser = localStorage.getItem(email);
        if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.password === password) {
            alert('Login successful!');
            onSubmit(email, password);
          } else {
            setErrors({ password: 'Invalid password' });
          }
        } else {
          setErrors({ email: 'No account found with this email' });
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 container">
      <div className="bg-white shadow-lg rounded-lg p-8  flex  flex justify-between items-center">
        <img src={AUTH_IMG} alt="Auth image" className='hidden lg:block w-[420px] h-[300px]' />

        <form>
          <h2 className="text-2xl font-bold mb-2 text-center">{isSignUp ? 'Create an account' : 'Login to your account'}</h2>
          <p className="text-gray-500 mb-6 text-center">
            {isSignUp
              ? 'Enter your email below to create your account'
              : 'Enter your credentials to access your account'}
          </p>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-2 sm:text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-none`}
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-2 sm:text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-none`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
          </div>

          {isSignUp && (
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 mb-2 sm:text-sm" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-none`}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-2">{errors.confirmPassword}</p>}
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 mb-6"
          >
            {isSignUp ? 'Create account' : 'Login'}
          </button>

          <div className="relative text-center mb-6">
            <div className="absolute left-0 top-1/2 w-full border-t border-gray-300"></div>
            <span className="bg-white relative px-3 text-sm text-gray-500">OR {isSignUp ? 'CONTINUE WITH' : 'SIGN IN WITH'}</span>
          </div>

          <div className="flex justify-between mb-4">
            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 mr-2 hover:bg-gray-100 sm:text-sm">
              <FaGithub className="mr-2" /> Github
            </button>
            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 ml-2 hover:bg-gray-100 sm:text-sm">
              <FaGoogle className="mr-2" /> Google
            </button>
          </div>

          <div className="text-center">
            {isSignUp ? (
              <p className="text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            ) : (
              <p className="text-sm">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
