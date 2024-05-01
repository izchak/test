import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Willing = () => {
  const global = useOutletContext();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const nameRef = useRef(null);

  const hendeleSubmit = (e) => {
    e.preventDefault();
    const namePerson = nameRef.current.value;
    if (namePerson.length < 2) {
      alert("name is short");
      return;
    }
    navigate("all");
  };

  return (
    <div className="home_content">
      <div className="willing">
        <form onSubmit={hendeleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name: </label>
            <input type="text" id="title" ref={nameRef} required />
          </div>
          <div>
            <select
              className="citys"
              onChange={(e) => global.setCityChoice(e.target.value)}
            >
              {global.citys.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button>Serch Willing</button>
        </form>
      </div>
    </div>
  );
};

export default Willing;
