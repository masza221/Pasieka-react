import "./app.css";
import About from "../../Components/About/About";
import Products from "../../Components/Products/Products";
import Front from "../../Components/Front/Front";
import Footer from "../../Components/Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login"
import ProtectedRoute from "../../Components/ProtectedRoute/ProtectedRoute";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AddProduct from "../AddProduct/AddProduct";
import Cart from "../Cart/Cart";


function App() {

  const { currentUser, logout } = useAuth()

  return (
    <div className="app">
      <Routes>
        <Route path='*' element=
          {
            <>
              {!currentUser ? <Link to="/login"><button className="button">Zaloguj się</button></Link> : <><button className="button" onClick={() => logout()}>Wyloguj</button><Link to={"/cart"}><button className="cart">Cart</button></Link> </>}
              <Front />
              <About />
              <Products />
              <Footer />
            </>
          }>
        </Route>
        <Route
          path='/register'
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!currentUser}>
              <Register />
            </ProtectedRoute>
          }></Route>
        <Route
          path='/login'
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!currentUser}>
              <Login />
            </ProtectedRoute>
          }></Route>
        <Route
          path='/products/add'
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={currentUser}>
              <AddProduct />
            </ProtectedRoute>
          }></Route>
        <Route
          path='/cart'
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={currentUser}>
              <Cart />
            </ProtectedRoute>
          }></Route>

      </Routes>
    </div>

  );
}

export default App;
