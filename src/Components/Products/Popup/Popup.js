import { useState, useEffect } from 'react';
import './popup.css';
import { getProducts } from '../../../api/getPopups';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';


const getData = async (id) => {
    const data = await getProducts()
    const element = data.find(el => el.id === +id)
    return element
  }


const Popup = () => {

    const [values, setValues] = useState([{}])
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const {addToCart} = useCart()

   const handleClick = (e) =>{
        e.preventDefault()
        addToCart(values)
    }

    useEffect(() => {

        getData(id).then(setValues,setLoading(false))
      }, [id]);



    return (
        <>
                <div className="popup">
                    <Link to={"/"}>
                        <div className="popup__close">
                            <div></div>
                        </div>
                    </Link>
                    {
                        !loading ? <div className="popup__content">
                        <div className="popop__title">
                            <h2>{values.title}</h2>
                        </div>
                        <p className="popup__price">{values.price} ZŁ</p>
                        <div className="popup__photo">
                            <img className='photo__img' src={values.img} alt='miod'  ></img>
                        </div>
                        <p>
                            {values.content}
                        </p>
                        <button onClick={handleClick} className='button popup__btn'>Dodaj do koszyka</button>
                    </div>: ""
                    }
                   
                </div>

        </>

    )
}

export default Popup;