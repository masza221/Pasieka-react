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

function App() {

  const { currentUser, logout } = useAuth()

  return (
    <div className="app">
      <Routes>
        <Route path='*' element={<>
          {!currentUser ? <Link to="/login"><button className="button--login"><span>Zaloguj się</span></button></Link> : <button className="button--login" onClick={() => logout()}>Wyloguj</button>}
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

      </Routes>
    </div>

  );
}

export default App;
