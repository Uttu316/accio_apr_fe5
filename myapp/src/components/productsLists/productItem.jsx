import styles from "./productsLists.module.css";

const ProductItem = ({ product }) => {
  const { image, title, category, rating, price, description } = product;
  const { rate, count } = rating || {};

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.ratingRow}>
          <span className={styles.ratingBadge}>⭐ {rate}</span>
          <span>{count} reviews</span>
        </p>
        <div className={styles.priceRow}>
          <p className={styles.price}>${price}</p>
        </div>
        <button className={styles.addBtn}>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductItem;
