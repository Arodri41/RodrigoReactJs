import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({
  agregarAlCarrito,
  stock,
  cantidadEnCarrito = 0,
}) => {
  const [counter, setCounter] = useState(cantidadEnCarrito);
  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    ></Counter>
  );
};

export default CounterContainer;
