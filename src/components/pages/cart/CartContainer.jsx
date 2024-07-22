import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { CartContext } from "../../../context/CartContext"
import { Cart } from "./Cart"

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalQuantity, getTotalPrice } =
    useContext(CartContext)
  let disabledButton = getTotalQuantity() > 0 ? false : true
  const { userData } = useContext(AuthContext)
  const [buyPath, setBuyPath] = useState("#")
  const navigate = useNavigate()
  const handleBuyPath = () => {
    if (disabledButton) {
      navigate("#")
    } else if (!disabledButton && userData.user != undefined) {
      navigate("/checkout")
    } else {
      navigate("/login")
    }
  }
  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      removeById={removeById}
      getTotalQuantity={getTotalQuantity}
      getTotalPrice={getTotalPrice}
      disabledButton={disabledButton}
      handleBuyPath={handleBuyPath}
    />
  )
}
