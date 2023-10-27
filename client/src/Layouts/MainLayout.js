import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Layout.scss";

const MainLayout = (props) => {
  return (
    <div className="mainLayout">
      <Header {...props} />
      <div className="contentWrapper">
        <Sidebar />
        <div className="main-content">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
