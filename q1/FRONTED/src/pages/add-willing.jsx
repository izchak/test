import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddWilling = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const global = useOutletContext();
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const descriptionRef = useRef(null);

  const hendeleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const location = locationRef.current.value;
    const description = descriptionRef.current.value;

    if (title.length > 20) {
      return setError("the title must be max 20 char");
    }

    let locationVlid = true;
    for (let i = 0; i < location.length; i++) {
      const char = location[i];
      if (char >= "A" && char <= "Z") locationVlid = false;
    }

    if (!locationVlid) {
      return setError("location must be lower case");
    }

    let hasCapitalLetter = true;
    let hasSymbol = true;
    let hesNumber = true;
    let hesWhyteSpace = true;
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    const space = " ";
    const num = "1234567890";

    for (let i = 0; i < location.length; i++) {
      const char = location[i];
      if (char >= "A" && char <= "Z") hasCapitalLetter = false;
      if (symbols.includes(char)) hasSymbol = false;
      if (num.includes(char)) hesNumber = false;
      if (space.includes(char)) hesWhyteSpace = false;

      if (!hasCapitalLetter || !hasSymbol || !hesNumber || !hesWhyteSpace) {
        return setError("location must include only lower case");
      }
    }

    if (description.length > 200) {
      return setError("description max 200 chars");
    }

    if (global.citys.length >= 1) {
      if (global.citys.includes(location)) {
        return;
      } else {
        global.setCitys([...global.citys, location]);
      }
    }

    const newWilling = { title, location, description };
    global.setWillingArr([...global.willingArr, newWilling]);
    navigate("/");
  };
  return (
    <div className="home_content">
      <div className="willing">
        <form onSubmit={hendeleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" ref={titleRef} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" ref={locationRef} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" ref={descriptionRef} required />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button>Add Willing</button>
        </form>
      </div>
    </div>
  );
};

export default AddWilling;
