import { Link, useParams } from "react-router";
import { API } from "../../services";
import { useContext, useEffect, useState } from "react";
import {
  FiShoppingCart,
  FiZap,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiCheckCircle,
  FiStar,
  FiPackage,
  FiClock,
} from "react-icons/fi";
import styles from "./product.module.css";
import PageWrapper from "../../components/pageWrapper";
import { CartContext } from "../../contexts/CartContext";

const StarRating = ({ rate }) => {
  const full = Math.floor(rate);
  const empty = 5 - full;
  return (
    <div className={styles.stars}>
      {Array.from({ length: full }, (_, i) => (
        <FiStar key={`f${i}`} fill="#f59e0b" stroke="#f59e0b" />
      ))}
      {Array.from({ length: empty }, (_, i) => (
        <FiStar key={`e${i}`} className={styles.starEmpty} />
      ))}
    </div>
  );
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  const { isInCart, addToCart, removeFromCart } = useContext(CartContext);

  const getProduct = async () => {
    try {
      const data = await API({ endpoint: "/products/" + id });
      setProduct(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;

  const inCart = isInCart(id);

  const onAddCart = () => {
    addToCart(product);
  };
  const onRemoveFromCart = () => {
    removeFromCart(id);
  };
  return (
    <PageWrapper title="Product" className={styles.page}>
      {isLoading && (
        <div className={styles.statusWrap}>
          <p className={styles.statusMsg}>Loading product details...</p>
        </div>
      )}
      {isError && (
        <div className={styles.statusWrap}>
          <p className={`${styles.statusMsg} ${styles.errorMsg}`}>
            Something went wrong. Please try again.
          </p>
          <Link to="/products" className={styles.btnCart}>
            Explore Product
          </Link>
        </div>
      )}
      {noProduct && (
        <div className={styles.statusWrap}>
          <p className={styles.statusMsg}>Product not available</p>
          <Link to="/products" className={styles.btnCart}>
            Explore Product
          </Link>
        </div>
      )}

      {hasProduct && (
        <>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span>/</span>
            <a href="/products">Products</a>
            <span>/</span>
            <span>{product.category}</span>
          </nav>

          {/* Main Product Section */}
          <section className={styles.main}>
            {/* Image */}
            <div className={styles.imageCol}>
              <div className={styles.imageCard}>
                <img
                  className={styles.productImg}
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>

            {/* Details */}
            <div className={styles.details}>
              <p className={styles.category}>{product.category}</p>
              <h1 className={styles.title}>{product.title}</h1>

              {/* Rating */}
              <div className={styles.ratingRow}>
                <StarRating rate={product.rating?.rate || 0} />
                <p className={styles.rateText}>{product.rating?.rate}</p>
                <p className={styles.countText}>
                  ({product.rating?.count} reviews)
                </p>
              </div>

              {/* Price */}
              <div className={styles.priceRow}>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.priceNote}>✓ In Stock</p>
              </div>

              <hr className={styles.divider} />

              {/* Description */}
              <p className={styles.descTitle}>Description</p>
              <p className={styles.descText}>{product.description}</p>

              <hr className={styles.divider} />

              {/* Buttons */}
              <div className={styles.btnGroup}>
                {!inCart && (
                  <button onClick={onAddCart} className={styles.btnCart}>
                    <FiShoppingCart /> Add to Cart
                  </button>
                )}
                {inCart && (
                  <button onClick={onRemoveFromCart} className={styles.btnCart}>
                    <FiShoppingCart /> Remove from Cart
                  </button>
                )}
                <button className={styles.btnBuy}>
                  <FiZap /> Buy Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className={styles.trustRow}>
                <span className={styles.trustItem}>
                  <FiTruck className={styles.trustIcon} /> Free Shipping
                </span>
                <span className={styles.trustItem}>
                  <FiShield className={styles.trustIcon} /> Secure Payment
                </span>
                <span className={styles.trustItem}>
                  <FiRefreshCw className={styles.trustIcon} /> 30-Day Returns
                </span>
              </div>
            </div>
          </section>

          {/* Product Highlights */}
          <section className={styles.bottomSection}>
            <h2 className={styles.bottomTitle}>Product Highlights</h2>
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightCard}>
                <div className={`${styles.highlightIcon} ${styles.hlPurple}`}>
                  <FiCheckCircle />
                </div>
                <div>
                  <p className={styles.highlightTitle}>Authentic Product</p>
                  <p className={styles.highlightDesc}>
                    100% genuine product sourced directly from the brand.
                  </p>
                </div>
              </div>
              <div className={styles.highlightCard}>
                <div className={`${styles.highlightIcon} ${styles.hlBlue}`}>
                  <FiPackage />
                </div>
                <div>
                  <p className={styles.highlightTitle}>Premium Packaging</p>
                  <p className={styles.highlightDesc}>
                    Carefully packed to ensure it arrives in perfect condition.
                  </p>
                </div>
              </div>
              <div className={styles.highlightCard}>
                <div className={`${styles.highlightIcon} ${styles.hlGreen}`}>
                  <FiTruck />
                </div>
                <div>
                  <p className={styles.highlightTitle}>Fast Delivery</p>
                  <p className={styles.highlightDesc}>
                    Express shipping available. Delivered in 2–4 business days.
                  </p>
                </div>
              </div>
              <div className={styles.highlightCard}>
                <div className={`${styles.highlightIcon} ${styles.hlOrange}`}>
                  <FiClock />
                </div>
                <div>
                  <p className={styles.highlightTitle}>Easy Returns</p>
                  <p className={styles.highlightDesc}>
                    Not happy? Return within 30 days for a full refund.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Reviews */}
          <section className={styles.bottomSection}>
            <h2 className={styles.bottomTitle}>Customer Reviews</h2>
            <div className={styles.reviewsGrid}>
              <div className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <FiStar key={i} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                </div>
                <p className={styles.reviewText}>
                  "Exactly as described. The quality exceeded my expectations
                  and shipping was incredibly fast."
                </p>
                <p className={styles.reviewAuthor}>— Sarah M.</p>
              </div>
              <div className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {Array.from({ length: 4 }, (_, i) => (
                    <FiStar key={i} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                  <FiStar style={{ color: "#e2e8f0" }} />
                </div>
                <p className={styles.reviewText}>
                  "Great value for the price. Would definitely recommend to
                  anyone looking for quality products."
                </p>
                <p className={styles.reviewAuthor}>— James R.</p>
              </div>
              <div className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <FiStar key={i} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                </div>
                <p className={styles.reviewText}>
                  "This is my third purchase from ShopVibe. Never disappointed.
                  The return policy gives me confidence every time."
                </p>
                <p className={styles.reviewAuthor}>— Priya K.</p>
              </div>
            </div>
          </section>
        </>
      )}
    </PageWrapper>
  );
};
export default ProductPage;
