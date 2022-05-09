import React, { useContext, useState,useEffect } from 'react'
import { auth  } from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

const AuthContext= React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true)

    function addToCart(product){

        const test = cart.find(e =>e.id === product.id)

        if(test){
            if(!test.nb) {test.nb = 0}
            cart[cart.indexOf(test)] = {...test, nb:test.nb +1  }
           return setCart([...cart])        
        }
      return   setCart([...cart, product])
    }

    function signup(email, password)
    {
        return createUserWithEmailAndPassword(auth,email, password)
    }
    function login(email, password)
    {
        return signInWithEmailAndPassword(auth,email, password)
    }
    function logout(){
        return signOut(auth)
    }

    useEffect(()=> {
       const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
       })
    return unsubscribe
    },[])
    

    const value = {
        currentUser,
        cart,
        addToCart,
        login,
        logout,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}