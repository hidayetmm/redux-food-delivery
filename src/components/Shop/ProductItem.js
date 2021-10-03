import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Button, Col } from "antd";
import { restaurantActions } from "../../store/restaurants-slice";

const ProductItem = ({ restaurant }) => {
  const dispatch = useDispatch();

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
            <Col span={8}>
              <div className={classes.item}>
                <div>
                  <h2 style={{ color: "black" }}>{item.title}</h2>
                  <h3>{restaurant.title}</h3>
                </div>
                <p>{restaurant.description}</p>
                <div className={classes.price}>₼{item.price}</div>
                <div>QTY: {item.quantity}</div>
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
