import { ButtonBase, Grid, Paper, styled, Typography } from "@mui/material"
import { ItemCount } from "../../common/ItemCount"
import "./ProductDetail.css"
import { darkTheme } from "../../../App.jsx"

export const ProductDetail = ({ productSelected, addToCart, quantity }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    }

    addToCart(data)
  }
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  })
  const style = {
    color: darkTheme.palette.warning.main,
    textAlign: "center",
  }
  return (
    <Grid className="paperGrid">
      <Paper
        className="paper"
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 700,
          flexGrow: 1,
        }}
      >
        <Grid className="cardGrid" container spacing={2}>
          <Grid className="imgGrip" item>
            <ButtonBase>
              <Img alt={productSelected.title} src={productSelected.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container className="container">
            <Grid
              className="infoGrip"
              item
              xs
              container
              direction="column"
              spacing={4}
            >
              <Grid className="infoGripGrip" item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {productSelected.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {productSelected.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quedan: {productSelected.stock}
                </Typography>
              </Grid>
              {productSelected.stock > 0 ? (
                <ItemCount
                  stock={productSelected.stock}
                  initial={quantity}
                  onAdd={onAdd}
                />
              ) : (
                <h3 style={style}>No hay stock</h3>
              )}
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $ {productSelected.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
