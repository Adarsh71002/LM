// NonHomeLayout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NonHomeLayout = ({ children }) => {
  const navigate = useNavigate();

  const goToSignIn = () => navigate('/signin');
  const goToCreateLibrary = () => navigate('/create-library');
  const goToCreateReader = () => navigate('/create-reader');

  return (
    <div className="non-home">
      {/* Navbar */}
      <div className="navbar">
        <button onClick={goToSignIn}>Sign In</button>
        <button onClick={goToCreateLibrary}>Create Library</button>
        <button onClick={goToCreateReader}>Create Reader</button>
      </div>
      {/* Centered header message */}
      <div className="center-message">
        <h1>Keep enjoying keep studying</h1>
      </div>
      {/* Page-specific content */}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default NonHomeLayout;
