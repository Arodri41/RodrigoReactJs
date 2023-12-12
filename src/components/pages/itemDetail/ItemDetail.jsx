import CounterContainer from "../../common/Counter/CounterContainer";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          marginTop: "20px",
          minWidth: 500,
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          width: "fit-content",
        }}
      >
        <CardMedia
          component="img"
          sx={{ minHeight: 500 }}
          title={product.title}
          image={product.img}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body6" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <CounterContainer
            stock={product.stock}
            agregarAlCarrito={agregarAlCarrito}
            cantidadEnCarrito={cantidadEnCarrito}
          ></CounterContainer>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemDetail;
