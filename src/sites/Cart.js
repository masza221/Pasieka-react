import { useAuth } from "../contexts/AuthContext";
import "../css/cart.css"


const Cart = () => {

  const {cart, removeFromCart} = useAuth()
  console.log(cart)

  return (
    <>
        {cart.map(el => (
          <div key={el.id} className="cart__product">
            <div className="product__data">
              <div className="product__imgbox">
                <img className="product__img" src={el.img}></img>
              </div>
              <div className="product__name">
                <p className="name__p">{el.title}</p>
              </div>
            </div>
            <div className="cart__data">
                <div className="price">
                <p className="price__p">{el.price + " zł"}</p>
                </div>
                <div className="amount">
                <p className="amount__p">{el.nb}</p>
                </div>
                <button onClick={()=> removeFromCart(el)} className="cart__btn">Del</button>
              </div>
          </div>
        ))}
    </>
  );
};

export default Cart;
