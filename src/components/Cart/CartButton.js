import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import styles from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>Cart</span>
      <span className={styles.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
