import { useState, useEffect } from "react";
import "./products.css";
import { getProducts } from "../../api/getPopups.js";
import Kafel from "./Kafel/Kafel";
import Fala from "../Fala/Fala";
import Popup from "./Popup/Popup";
import { Route, Routes } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts()
      setProducts(data)
    }
    getData()
  }, []);


  return (
    <>
      <Fala ></Fala>
      <section className="products">
        <Routes>
          <Route path="*" element={
            <>
              <div className="pre-title">Products</div>
              <Kafel products={products} />
            </>
          } />
          <Route path="/honey/:id" element={<Popup products={products} />} />
        </Routes>

      </section>
    </>
  );
};

export default Products;
