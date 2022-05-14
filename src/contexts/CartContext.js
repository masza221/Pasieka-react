import React, { useContext, useState, useEffect } from 'react'


const CartContext = React.createContext()


export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState();
    const [loading, setLoading] = useState(true)

    const addToLocal = (el) => {
        window.localStorage.setItem('CART', JSON.stringify(el))
    }
    const getFromLocal = () => {
        const data = window.localStorage.getItem('CART')
        if (data == null) { setCart([]); setLoading(false); return }
        setLoading(false)
        setCart(JSON.parse(data))
    }

    useEffect(() => {
        getFromLocal()
    }, [])


    function isInCart(product) {
        if (!cart) {
            return false
        }
        else {
            const test = cart.find(e => e.id === product.id)
            return test
        }

    }

    function addToCart(product) {
        const element = isInCart(product)
        if (element) {
            cart[cart.indexOf(element)] = { ...element, nb: element.nb + 1 }
            addToLocal(cart)
            return setCart([...cart])
        }
        addToLocal([...cart, { ...product, nb: 1 }])
        return setCart([...cart, { ...product, nb: 1 }])
    }

    function removeFromCart(product) {

        const newCart = cart.filter(el => el.id !== product.id)
        addToLocal(newCart)
        return setCart([...newCart])
    }



    const value = {
        cart,
        removeFromCart,
        addToCart
    }
    return (
        <CartContext.Provider value={value}>
            {!loading && children}
        </CartContext.Provider>
    )
}
