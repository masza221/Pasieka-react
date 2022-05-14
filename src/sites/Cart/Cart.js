import { useCart } from "../../contexts/CartContext";
import "./cart.css"
import Product from "./Product/Product";


const Cart = () => {

  const { cart, removeFromCart } = useCart()

  return (
    <>
      {cart && cart.map(el => (
        <Product
          key={el.id}
          imgSrc={el.img}
          title={el.title}
          price={el.price}
          number={el.nb}
          product={ () => removeFromCart(el) }
        />
      ))}
    </>
  );
};

export default Cart;
