import React from "react";
import Footer from "./Footer";
import TovNav from "./TovNav";

const Layout = ({ children }) => {
  return (
    <div>
      <TovNav />
      <div className="main-page">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
