import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";
import { Row, Typography } from "antd";

const Products = (props) => {
  const { Title } = Typography;
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  return (
    <div className={classes.products}>
      <Title level={3} style={{ textAlign: "center" }}>
        Buy your favorite food
      </Title>
      <Row gutter={[24, 24]}>
        {restaurants.map((restaurant) => (
          <ProductItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </Row>
    </div>
  );
};

export default Products;
