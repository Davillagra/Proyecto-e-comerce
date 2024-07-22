import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"

export const Form = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: (data) => {
      console.log(data)
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es requerido")
        .min(3, "Este campo debe tener al menos 3 caracteres"),
    }),
  })
  console.log(errors)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </form>
    </>
  )
}
