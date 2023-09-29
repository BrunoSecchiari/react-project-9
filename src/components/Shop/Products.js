import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Available Products</h2>
      <ul>
        <ProductItem
          title='Product 1'
          price={6}
          description='A brief description will be displayed here'
        />
      </ul>
    </section>
  );
};

export default Products;
