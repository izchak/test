import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const All = () => {
  const navigate = useNavigate();
  const global = useOutletContext();
  const data = global.willingArr;
  const filterData = data.filter(city);
  return <div></div>;
};

export default All;
