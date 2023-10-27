import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for toggling sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="container">
      <button onClick={toggleSidebar} className="toggle-sidebar-btn">
        {isSidebarOpen ? (
          <i className="fas fa-arrow-left"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
      <div className={`side-container ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="fetch-container">
          <nav className={`mainMenu`}>
            <div className="callToActions">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/orders">My Orders</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
