import { Button, Grid, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UseCount } from "../hooks/UseCount"

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = UseCount(initial, stock)
  const [isAdd, setIsAdd] = useState(false)

  let navigate = useNavigate()

  return (
    <>
      <Grid
        item
        container
        flexDirection="colum"
        alignItems="center"
        justifyContent="center"
        className="buttons1"
      >
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          className="buttons2"
        >
          <Button disabled={isAdd} onClick={decrement} className="buttonsAdd">
            -
          </Button>
          <Typography>{count}</Typography>
          <Button disabled={isAdd} onClick={increment} className="buttonsAdd">
            +
          </Button>
        </Grid>
        {isAdd ? (
          <Button
            onClick={() => {
              navigate("/cart")
            }}
            variant="contained"
          >
            Ir al carrito
          </Button>
        ) : (
          <Button
            onClick={() => {
              onAdd(count)
              setIsAdd(true)
            }}
            variant="contained"
          >
            Añadir al carrito
          </Button>
        )}
      </Grid>
    </>
  )
}
