import { useState } from "react";
import "./css/App.css";
import Info from "./Info.js";
import Products from "./comp/Products.js";
import Front from "./comp/Front.js";
import Popup from "./comp/Popup.js";

function App() {
  const [isActive, setActive] = useState({});

  return (
    <div className="App">
      <Front></Front>
      <Info></Info>
      <Products
        setActive={(value) => {
          setActive(value);
        }}
      ></Products>
      {isActive.isTrue === true && (
        <Popup
          popupId={isActive.id}
          key={isActive.id}
          active={isActive}
          setActive={() => setActive(false)}
        ></Popup>
      )}
    </div>
  );
}

export default App;
