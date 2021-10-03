import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Button, Col, Space, Typography } from "antd";
import { restaurantActions } from "../../store/restaurants-slice";

const ProductItem = ({ restaurant }) => {
  const dispatch = useDispatch();
  const { Text } = Typography;

  const addToCartHandler = (restaurant, item) => {
    dispatch(cartActions.addItemToCart({ restaurant, item }));
    dispatch(restaurantActions.removeItemFromRestaurant({ restaurant, item }));
  };
  const { items } = restaurant;

  return (
    <>
      {items.map(
        (item) =>
          item.quantity !== 0 && (
            <Col span={8} key={restaurant.id + restaurant.title + item.id}>
              <div className={classes.item}>
                <div>
                  <h2 style={{ color: "black" }}>{item.title}</h2>
                  <h3>{restaurant.title}</h3>
                </div>
                <p>{restaurant.description}</p>
                <Space direction="vertical">
                  <div className={classes.price}>₼{item.price}</div>
                  <div>
                    <Text strong>Quantity: {item.quantity}</Text>
                  </div>
                </Space>
                <div className={classes.actions}>
                  <Button onClick={() => addToCartHandler(restaurant, item)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Col>
          )
      )}
    </>
  );
};

export default ProductItem;
