import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <img src="./rit-logo2.png" alt="" style={{ 
        width:"300px", 
        height:"90px"
      }} />

      <hr style={{ 
        width:"290px",
        marginTop:"10px",
        marginBottom:"5px"
      }}></hr>
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/" className="home-btn">
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
