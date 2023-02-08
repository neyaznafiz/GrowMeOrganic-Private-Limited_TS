import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  if (!user) {
    navigate("/authentication");
  }

  return <div>home </div>;
};

export default Home;
