import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/App.scss";


const LoadingPage = () => {
  const navigate = useNavigate();
  setTimeout(()=>{
    navigate("/home");
  },2000)
  return (
    <div className="loading-page">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingPage;
