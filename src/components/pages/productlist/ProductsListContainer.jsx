import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ProductsList } from "./ProductsList"
import { HashLoader } from "react-spinners"
import { db } from "../../../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import "../../../App.css"
import { darkTheme } from "../../../App"
import "./ProductList.css"

export const ProductsListContainer = () => {
  const [items, setItems] = useState([])

  const { catName } = useParams()

  useEffect(() => {
    let itemsCollection = collection(db, "products")
    let consulta

    if (!catName) {
      consulta = itemsCollection
    } else {
      let q = query(itemsCollection, where("category", "==", catName))
      consulta = q
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((e) => {
          return {
            ...e.data(),
            id: e.id,
          }
        })
        setItems(products)
      })
      .catch((err) => console.log(err))
  }, [catName])
  if (items.length == 0) {
    return (
      <div className="loadingBar">
        <HashLoader
          className="main"
          size={100}
          color={darkTheme.palette.primary.main}
        />
      </div>
    )
  }

  return <ProductsList items={items} />
}
