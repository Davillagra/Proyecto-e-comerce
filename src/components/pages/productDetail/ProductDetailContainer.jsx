import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { ProductDetail } from "./ProductDetail"
import { HashLoader } from "react-spinners"
import { db } from "../../../firebaseConfig"
import { collection, getDoc, doc } from "firebase/firestore"
import "../../../App.css"
import { darkTheme } from "../../../App"

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({})

  const { addToCart, getQuantity } = useContext(CartContext)

  const { id } = useParams()

  const quantity = getQuantity(id)

  useEffect(() => {
    let itemCollection = collection(db, "products")
    let refDoc = doc(itemCollection, id)
    getDoc(refDoc)
      .then((res) => {
        setProductSelect({ id: res.id, ...res.data() })
      })
      .catch()
  }, [id])
  return (
    <>
      {productSelected.id ? (
        <ProductDetail
          productSelected={productSelected}
          addToCart={addToCart}
          quantity={quantity}
        />
      ) : (
        <div className="loadingBar">
          <HashLoader
            className="main"
            size={100}
            color={darkTheme.palette.primary.main}
          />
        </div>
      )}
    </>
  )
}
