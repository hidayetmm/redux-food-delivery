import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { restaurantActions } from "../../store/restaurants-slice";
import { Button } from "antd";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const currentRestaurant = restaurants.find(
    (restaurant) => restaurant.id === item.restaurantId
  );
  const currentItem = currentRestaurant.items.find(
    (curItem) => curItem.id === item.id
  );

  const increaseItem = () => {
    dispatch(cartActions.addItemToCart({ item }));
    dispatch(
      restaurantActions.removeItemFromRestaurant({
        restaurant: { id: item.restaurantId },
        item,
      })
    );
  };
  const decreaseItem = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
    dispatch(
      restaurantActions.addItemToRestaurant({
        restaurant: { id: item.restaurantId },
        item,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.name}</h3>
        <div className={classes.price}>
          AZN{item.totalPrice}{" "}
          <span className={classes.itemprice}>(AZN{item.price}/item)</span>
        </div>
      </header>
      <h4>{item.restaurantName}</h4>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <Button type="text" onClick={decreaseItem}>
            -
          </Button>
          <Button
            type="text"
            disabled={currentItem.quantity === 0}
            onClick={increaseItem}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
