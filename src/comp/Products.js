import { useState, useEffect } from "react";
import "../css/products.css";
import { getProducts } from "../api/getPopups.js";
import Kafel from "./Kafel.js";
import Fala from "./Fala.js";
import Title from "./Title";
import Popup from "./Popup";
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
              <Title text="Miody" />
              <Kafel products={products} />
            </>
          } />
          <Route path="/honey/:id" element={<Popup />} />
        </Routes>

      </section>
    </>
  );
};

export default Products;
