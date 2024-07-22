import { createContext, useState } from "react"
import Swal from "sweetalert2"

// creo el contexto
export const CartContext = createContext()
// creo el proveedor del contexto
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addToCart = (newProduct) => {
    if (isInCart(newProduct.id)) {
      let newArray = cart.map((prod) => {
        if (prod.id === newProduct.id) {
          return {
            ...prod,
            quantity: newProduct.quantity,
          }
        } else {
          return prod
        }
      })
      setCart(newArray)
    } else {
      setCart([...cart, newProduct])
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se guardó el carrito",
      showConfirmButton: false,
      timer: 1000,
      width: "15rem",
      background: "#9b9b9b",
    })
  }
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }
  const clearCartSimple = () => {
    setCart([])
  }
  const clearCart = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-17dtbfg-MuiButtonBase-root-MuiButton-root",
        cancelButton:
          "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeMedium MuiButton-containedSizeMedium css-17dtbfg-MuiButtonBase-root-MuiButton-root",
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons
      .fire({
        title: "Borrar todo el carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire("Eliminado", "", "success")
          setCart([])
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      })
  }
  const removeById = (id) => {
    let newArray = cart.filter((prod) => prod.id !== id)
    setCart(newArray)
  }
  const getQuantity = (id) => {
    let producto = cart.find((prod) => prod.id === id)
    return producto?.quantity
  }
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price
    }, 0)

    return total
  }
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, e) => {
      return acc + e.quantity
    }, 0)
    return total
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getQuantity,
    getTotalPrice,
    getTotalQuantity,
    clearCartSimple,
  }
  return <CartContext.Provider value={data}> {children} </CartContext.Provider>
}
export default CartContextProvider
