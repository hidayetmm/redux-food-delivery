import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const restaurants = [
    {
      id: 1,
      title: "Sushi Baku",
      description: "Japanese",
      items: [
        {
          id: 1,
          title: "California roll",
          price: 10,
          quantity: 5,
        },
      ],
    },
    {
      id: 2,
      title: "Pizza Inn",
      description: "Italian",
      items: [
        {
          id: 1,
          title: "California roll",
          price: 10,
          quantity: 5,
        },
      ],
    },
    {
      id: 3,
      title: "Great Wall",
      description: "Chinese",
      items: [
        {
          id: 1,
          title: "California roll",
          price: 10,
          quantity: 5,
        },
      ],
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
