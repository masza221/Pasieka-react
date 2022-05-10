import "../css/app.css";
import Info from "../comp/Info.js";
import Products from "../comp/Products.js";
import Front from "../comp/Front.js";
import Footer from "../comp/Footer";
import Register from "./Register";
import Login from "./Login";
import ProtectedRoute from "../comp/ProtectedRoute";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import { getNotes } from "../api/getPopups.js";
import { useState, useEffect } from "react";

function App() {

  const { currentUser, logout,cart } = useAuth()

  return (
    <div className="app">
      <Routes>
        <Route path='*' element={<>
          {!currentUser ? <Link to="/login"><button className="button">Zaloguj się</button></Link> : <><button className="button" onClick={() => logout()}>Wyloguj</button><Link to={"/cart"}><button className="cart">Cart</button></Link> </>}
          <Front></Front>
          <Info></Info>
          <Products></Products>
          <Footer></Footer></>}>
        </Route>
        <Route
          path='/register'
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!currentUser}
            >
              <Register />
            </ProtectedRoute>
          }></Route>
        <Route
          path='/login'
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!currentUser}
            >
              <Login />
            </ProtectedRoute>
          }></Route>
          <Route
          path='/products/add'
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={currentUser}
            >
              <AddProduct />
            </ProtectedRoute>
          }></Route>
          <Route
          path='/cart'
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={currentUser}
            >
              <Cart />
            </ProtectedRoute>
          }></Route>

      </Routes>
    </div>

  );
}

export default App;
