import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export const ProductCard = ({ elemento: e }) => {
  return (
    <Card className="cardsContainer" sx={{ width: 345 }}>
      <CardMedia sx={{ height: 140 }} image={e.img} title={e.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {e.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${e.id}`}>
          <Button variant="contained">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
