// Desc: Main App component
// Imports:
//  React: Package to build react component interface
import React from "react";
import { Route, Routes } from "react-router-dom"; // Import the Routes component

// Import layouts

import MainLayout from "./Layouts/MainLayout";

// Import Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = (props) => {
  return (
    <div className="App">
      <Routes>
        {/* Hompage Layout section */}
        {/* Route for the root path */}
        <Route
          exact
          path="/medleaf"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* Main Layout section no auth needed*/}
        {/* Route for the about path */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        {/* Route for the Products path */}
        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        {/* Route for the cart path */}
        <Route
          path="/orders"
          element={
            <MainLayout>
              <Orders />
            </MainLayout>
          }
        />
        {/* Route for the cart path */}
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />

        {/* Route for the dashboard path */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
