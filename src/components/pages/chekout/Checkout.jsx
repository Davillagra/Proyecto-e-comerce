import "./Checkout.css"
import { Button, TextField } from "@mui/material"
import { Link } from "react-router-dom"

export const Checkout = ({ orderId, handleSubmit, handleChange, errors }) => {
  return (
    <>
      <div className="formContainer">
        {orderId ? (
          <div className="exitForm">
            <h1>
              Su compra fue exitosa y tiene el comprobante nro: {orderId}{" "}
            </h1>
            <Link to={"/"}>
              <Button variant="contained">Volver</Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              className="formItem"
              label="Nombre"
              variant="outlined"
              name="name"
              onChange={handleChange}
              helperText={errors.name}
              error={errors.name ? true : false}
            />
            <TextField
              className="formItem"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField
              className="formItem"
              label="Telefono"
              variant="outlined"
              name="phone"
              onChange={handleChange}
              helperText={errors.phone}
              error={errors.phone ? true : false}
            />
            <Button className="formItem" type="submit" variant="contained">
              Comprar
            </Button>
          </form>
        )}
      </div>
    </>
  )
}
