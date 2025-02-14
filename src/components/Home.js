import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); // Redirect to login after logout
  };

  return (
    <div className="auth-container">
      <h2>Welcome to the Home Page! 🎉</h2>
      <p>You have successfully logged in.</p>
      <div className="button-container">
  <button onClick={handleLogout}>Logout</button>
</div>
    </div>
  );
};

export default Home;
