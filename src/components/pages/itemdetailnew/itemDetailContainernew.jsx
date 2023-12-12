import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemDetailNew from "./ItemDetailnew";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainernew = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let refCollection = collection(db, "productos");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);

    Swal.fire({
      position: "center",
      icon: "success",
      title: data.quantity > 1 ? "Productos agregados" : "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <ItemDetailNew
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      cantidadEnCarrito={cantidadEnCarrito}
    ></ItemDetailNew>
  );
};

export default ItemDetailContainernew;
