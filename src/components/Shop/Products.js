import ProductItem from './ProductItem';
import styles from './Products.module.css';

const AVAILABLE_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Product 1',
    description: 'Description of the first product',
  },
  {
    id: 'p2',
    price: 10,
    title: 'Product 2',
    description: 'Description of the second product',
  },
  {
    id: 'p3',
    price: 5,
    title: 'Product 3',
    description: 'Description of the third product',
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
              id={product.id}
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
