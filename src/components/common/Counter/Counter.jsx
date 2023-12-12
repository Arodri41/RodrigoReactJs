import { Button } from "@mui/material";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          disabled={counter <= 1}
          variant="contained"
          onClick={() => setCounter(counter - 1)}
          style={{ marginRight: "10px" }}
        >
          -
        </Button>
        <div
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          <h4 style={{ margin: 0 }}>{counter}</h4>
        </div>
        <Button
          disabled={counter >= stock}
          variant="contained"
          onClick={() => setCounter(counter + 1)}
          style={{ marginLeft: "10px" }}
        >
          +
        </Button>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
        style={{ marginTop: "10px" }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
