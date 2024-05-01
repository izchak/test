import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const global = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="home_content">
      <div className="willing">
        <h1>Willing</h1>
        <div className="div">
          <button onClick={() => navigate("AddWilling")}>Add Willing</button>
          <button onClick={() => navigate("willing")}>Find Willing</button>
        </div>
        <div className="div"></div>
      </div>
    </div>
  );
};

export default Home;
