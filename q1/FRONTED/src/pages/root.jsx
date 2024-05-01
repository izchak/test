import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { storageService } from "../services/storageService";
import Footer from "../components/Footer";

const Root = () => {
  const [willingArr, setWillingArr] = useState([]);
  const [cityChoice, setCityChoice] = useState("");
  const [citys, setCitys] = useState(["tel aviv", "dimona"]);

  return (
    <main className="main-layout">
      <header>
        <div className="header-container">
          <div>
            <h2 className="logo"> SV WILLING</h2>
          </div>
        </div>
      </header>
      <div className="outlet">
        <Outlet
          context={{
            willingArr,
            setWillingArr,
            cityChoice,
            setCityChoice,
            citys,
            setCitys,
          }}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Root;
