import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; 

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      const nameParts = userData.fullName.split(" ");
      setFirstName(nameParts[0]); 
    } else {
      navigate("/LoginPage"); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userData"); 
    navigate("/LoginPage"); 
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {firstName}!</h1>
      <button className="home-btn" onClick={() => navigate("/")}>Home</button>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;