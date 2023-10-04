import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import styles from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const addProductHandler = () => {
    dispatch(cartActions.addItem({ title, price }));
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addProductHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
