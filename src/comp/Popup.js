import { useState, useEffect } from 'react';
import '../css/popup.css';
import { getProducts } from '../api/getPopups';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";



const Popup = () => {

    const [values, setValues] = useState([{}])
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const {addToCart} = useAuth()

   const handleClick = (e) =>{
        e.preventDefault()
        addToCart(values)
    }

    useEffect(() => {
        const getData = async () => {
            let data = await getProducts()
            const element = data.find(el => el.id === +id)
            setValues(element)
            setLoading(false)
        }
        getData()
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
                        <p className="popup__price">{values.price}</p>
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