import React from 'react'

export default function Product({imgSrc,title,price,number,product}) {



    return (
        <div className="cart__product">
            <div className="product__data">
                <div className="product__imgbox">
                    <img className="product__img" src={imgSrc} alt={title}></img>
                </div>
                <div className="product__name">
                    <p className="name__p">{title}</p>
                </div>
            </div>
            <div className="cart__data">
                <div className="price">
                    <p className="price__p">{price + " zł"}</p>
                </div>
                <div className="amount">
                    <p className="amount__p">{number}</p>
                </div>
                <button onClick={product} className="cart__btn">Del</button>
            </div>
        </div>
    )
}
