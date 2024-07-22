import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { useFormik } from "formik"
import { useContext, useState } from "react"
import { Checkout } from "./Checkout"
import * as Yup from "yup"
import { db } from "../../../firebaseConfig"
import { CartContext } from "../../../context/CartContext"

export const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCartSimple } = useContext(CartContext)
  let total = getTotalPrice()
  const [orderId, setOrderId] = useState(null)
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      }

      let ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id))
      cart.forEach((e) => {
        updateDoc(doc(db, "products", e.id), { stock: e.stock - e.quantity })
      })

      clearCartSimple()
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Campo requerido")
        .min(5, "Debe contener al menos 5 caracteres"),
      email: Yup.string()
        .required("Campo requerido")
        .email("No es un email valido"),
      phone: Yup.string().matches(
        /^\d{10}$/,
        "Ingresa un número de teléfono válido"
      ),
    }),
  })
  return (
    <Checkout
      orderId={orderId}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  )
}
