import ItemNuevo from "./itemnuevo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingWeb from "../../common/loadingWeb/LoadingWeb";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemNuevoContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consult;
    let productsCollection = collection(db, "productos");
    if (!categoryName) {
      consult = productsCollection;
    } else {
      consult = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(consult).then((res) => {
      let arrProducts = res.docs.map((el) => {
return { id: el.id, ...el.data() };      });
      setItems(arrProducts);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <>
        <LoadingWeb></LoadingWeb>
      </>
    );
  } else {
    return (
      <div>
        <ItemNuevo items={items}></ItemNuevo>
      </div>
    );
  }
};

export default ItemNuevoContainer;
