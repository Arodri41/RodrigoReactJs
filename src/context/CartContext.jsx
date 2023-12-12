import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((el) => el.id === product.id);
    if (existe) {
      let newArr = cart.map((el) => {
        if (product.id === el.id) {
          return { ...el, quantity: product.quantity };
        } else {
          return el;
        }
      });
      setCart(newArr);
    } else { 
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArr = cart.filter((el) => el.id !== id);
    setCart(newArr);
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);

    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);

    return total;
  };

  const getQuantityById = (id) => {
    let prodFinded = cart.find((el) => el.id === +id);
    return prodFinded ? prodFinded.quantity : prodFinded;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
