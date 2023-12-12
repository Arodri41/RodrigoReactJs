import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/itemDetailContainer";
import ItemNuevoContainer from "../components/pages/itemnuevo/Itemnuevocontainer";
import CartContainer from "../components/pages/cart/cartContainer";
import ItemDetailContainernew from "../components/pages/itemdetailnew/ItemDetailnew";
import ItemCartContainer from "../components/pages/itemcart/itemcartcontainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/vehicular",
    Element: ItemNuevoContainer,
  },
  {
    id: "category",
    path: "/category/instalaciones",
    Element: ItemCartContainer,
  },

  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "details",
    path: "/itemDetails/:id",
    Element: ItemDetailContainernew,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },

];
