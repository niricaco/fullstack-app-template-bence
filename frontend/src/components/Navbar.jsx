import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const nav = (path) => {
    console.log("rerouting"); // barmilyen route elotti logika, pl lejart token ellenorzese
    navigate(path);
  };

  return (
    <>
      <nav>
        <button onClick={() => nav("/")}>Home</button>
        <button onClick={() => nav("/about")}>About</button>
        {/* <button onClick={() => navigate("/profile")}>Profile</button> */}
        <Link to="/profile">Profile</Link>
      </nav>
    </>
  );
};

export default Navbar;
