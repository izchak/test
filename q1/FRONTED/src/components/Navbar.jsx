import React from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/userService";

const Navbar = () => {
  const navigate = useNavigate();
  const homePage = () => {
    navigate("/home");
  };

  const parkingPage = () => {
    navigate("/activ-parking");
  };
  const navHistory = () => {
    navigate("/history");
  };
  const handleLogout = () => {
    userService.logout();
    navigate("/");
  };
  return (
    <div className="btn_div">
      <button onClick={() => homePage()}>Active Park</button>
      <button onClick={() => parkingPage()}>Parking</button>
      <button onClick={() => navHistory()}>History</button>
      <button onClick={() => handleLogout()}>Exit</button>
    </div>
  );
};

export default Navbar;
