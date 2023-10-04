import ProductItem from './ProductItem';
import styles from './Products.module.css';

const AVAILABLE_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: '1st Book',
    description: 'Description of the first book',
  },
  {
    id: 'p2',
    price: 10,
    title: '2nd Book',
    description: 'Description of the second book',
  },
  {
    id: 'p3',
    price: 5,
    title: '3rd Book',
    description: 'Description of the third book',
  },
];

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>Available Products</h2>
      <ul>
        {AVAILABLE_PRODUCTS.map((product, index) => {
          return (
            <ProductItem
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
