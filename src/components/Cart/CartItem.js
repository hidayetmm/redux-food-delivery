import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseItem = () => {
    dispatch(cartActions.addItemToCart(item));
  };
  const decreaseItem = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.name}</h3>
        <div className={classes.price}>
          ${item.totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItem}>-</button>
          <button onClick={increaseItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
