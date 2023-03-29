import React from "react";
import "../Styles/Navbar.css";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Succesfully");
    navigate("/login");
  };

  const visible = localStorage.getItem("token");
return (
    <div className="navabar">
      <div>
        {" "}
        <Link to="/">Home</Link>
      </div>

      <div className={`menu-item`} onClick={handleLogout}>
        <Link to="/login">{visible ? "Logout" : ""}</Link>
      </div>
    </div>
  );
}

export default Navbar;
