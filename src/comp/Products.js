import { useState, useEffect } from "react";
import "../css/products.css";
import { getPopups } from "../api/getPopups.js";
import Kafel from "./Kafel.js";
import Fala from "./Fala.js";

const Products = ({ setActive }) => {
  const [popups, setPopups] = useState([]);

  useEffect(() => {
    getPopups().then((respone) => {
      setPopups(respone);
    });
  }, []);

  function showPopup(id, bool) {
    setActive({
        id:id,
        isTrue:bool
    });
    document.querySelector("body").style.overflow = "hidden";
  }

  return (
    <>
      <Fala ></Fala>
      <div className="pre-title">Miody</div>
      <section id="produkty">     
        <Kafel popups={popups} showPopup={(val,val2) => showPopup(val,val2)}></Kafel>
      </section>
    </>
  );
};

export default Products;
