import { useNavigate } from "react-router";
import styles from "./productsLists.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductItem = ({ product }) => {
  const { image, title, category, rating, price, id, description } = product;
  const { rate, count } = rating || {};

  const { addToCart, isInCart, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();

  const onProduct = () => {
    navigate(`/product/${id}`);
  };
  const onAddtoCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const onRemoveCart = (e) => {
    e.stopPropagation();
    removeFromCart(id);
  };

  const inCart = isInCart(id);

  return (
    <div onClick={onProduct} className={styles.card}>
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
        {!inCart && (
          <button onClick={onAddtoCart} className={styles.addBtn}>
            Add to Cart
          </button>
        )}
        {inCart && (
          <button onClick={onRemoveCart} className={styles.addBtn}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductItem;
