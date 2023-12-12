import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import LoadingWeb from "../loadingWeb/LoadingWeb";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let totalProd = getTotalQuantity();

  return (
    <div>
      {totalProd > 0 ? (
        <Link to="/cart" style={{ color: "white" }}>
          <Badge badgeContent={totalProd} color="secondary" showZero>
            <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
          </Badge>
        </Link>
      ) : (
        <Badge badgeContent={totalProd} color="primary" showZero>
          <ShoppingCartIcon style={{ color: "black" }} sx={{ fontSize: 40 }} />
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;
