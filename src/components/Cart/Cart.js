import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  const itemsInCart = items.map((product, index) => {
    return (
      <CartItem
        key={index}
        item={{
          title: product.title,
          price: product.price,
          quantity: product.quantity,
          total: product.total,
        }}
      />
    );
  });

  return (
    <Card className={styles.cart}>
      <h2>Shopping Cart</h2>
      <ul>{itemsInCart}</ul>
    </Card>
  );
};

export default Cart;
