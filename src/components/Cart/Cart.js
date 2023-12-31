import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={styles.cart}>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={{
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
                totalPrice: item.totalPrice,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
