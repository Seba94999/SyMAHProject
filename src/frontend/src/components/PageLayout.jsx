import React from "react";
import Navbar from "./Navbar";
import "../styles/PageLayout.css";

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
