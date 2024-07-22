import { addDoc, collection, doc } from "firebase/firestore"
import { db } from "./firebaseConfig"
import { products } from "./productsMok"

export const RellenarProd = () => {
  const rellenar = () => {
    let itemCollection = collection(db, "products")
    products.forEach((e) => {
      addDoc(itemCollection, e)
    })
  }
  return <button onClick={rellenar}>Rellenar Productos</button>
}
