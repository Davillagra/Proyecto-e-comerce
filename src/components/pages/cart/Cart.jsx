import "./Cart.css"
import {
  Button,
  ButtonBase,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material"

export const Cart = ({
  cart,
  clearCart,
  removeById,
  getTotalQuantity,
  getTotalPrice,
  disabledButton,
  handleBuyPath,
}) => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  })
  return (
    <Grid container className="cartMain">
      {getTotalQuantity() > 0 ? (
        <Grid item xs={12} md={8} className="cartCard">
          {cart.map((prod) => {
            return (
              <Paper className="prodCard" key={prod.id}>
                <Grid container className="prodCardGrid">
                  <Grid item>
                    <ButtonBase>
                      <Img alt={prod.title} src={prod.img} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {prod.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Cantidad: {prod.quantity}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          onClick={() => removeById(prod.id)}
                        >
                          Eliminar
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        $ {prod.price * prod.quantity}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            )
          })}
        </Grid>
      ) : (
        <Grid item xs={12} md={8}>
          <h1>No hay productos :(</h1>
        </Grid>
      )}

      <Grid container item xs={12} md={4} className="buySeccion">
        <div>
          <h2>Productos en el carrito: {getTotalQuantity()} </h2>
          <h3>Total: $ {getTotalPrice()} </h3>
        </div>

        <div className="buttonList">
          <Button
            onClick={handleBuyPath}
            disabled={disabledButton}
            variant="contained"
          >
            Comprar
          </Button>

          <Button
            disabled={disabledButton}
            variant="contained"
            onClick={clearCart}
          >
            Limpiar carrito
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}
