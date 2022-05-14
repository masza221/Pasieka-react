import { collection, getDocs } from "firebase/firestore"
import { db } from "../Utils/firebase"

const postCollectionRef = collection(db,"products")

 const getProducts = async () => {
    const data = await getDocs(postCollectionRef)
    const products = data.docs.map(doc => ({...doc.data()}))


    return products
}

// const getNotes = async () => {
//     const data = await fetch("http://localhost:3001/notes")
//     return await data.json();
// }
export {getProducts}