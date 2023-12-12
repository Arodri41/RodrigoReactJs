import ProductCard from "../../common/productCard/ProductCard";

const ItemNuevo = ({ items }) => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "50px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item}></ProductCard>;
      })}
    </section>
  );
};

export default ItemNuevo;
