import Header from "components/Header";
import Footer from "components/Footer";
import React, { useEffect } from "react";
import "styles/styles.css";

import { cleanup } from "@testing-library/react";
import PrivateRoute from "components/privateRoute";

const PrivateLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="mainContainer">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </PrivateRoute>
  );
};

export default PrivateLayout;
