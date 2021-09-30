import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { Button } from "antd";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </Button>
  );
};

export default CartButton;
