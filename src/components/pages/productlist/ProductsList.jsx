import { ProductCard } from "../../common/productCard/ProductCard"
import "./ProductList.css"

export const ProductsList = ({ items }) => {
  return (
    <div className="cards-container main">
      {items.map((elemento) => (
        <ProductCard key={elemento.id} elemento={elemento} />
      ))}
    </div>
  )
}
