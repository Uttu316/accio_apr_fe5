import { useContext, useState } from "react";
import { Link } from "react-router";
import {
  FiTrash2,
  FiShoppingBag,
  FiCreditCard,
  FiArrowRight,
} from "react-icons/fi";
import PageWrapper from "../../components/pageWrapper";
import { CartContext } from "../../contexts/CartContext";
import styles from "./cart.module.css";

const DISCOUNT_RATE = 0.1;

const CartItem = ({ item, onRemove }) => (
  <div className={styles.cartItem}>
    <div className={styles.itemImage}>
      <img src={item.image} alt={item.title} />
    </div>
    <div className={styles.itemBody}>
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemDesc}>{item.description}</p>
      <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
      <button
        className={styles.removeBtn}
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.title} from cart`}
      >
        <FiTrash2 className={styles.removeIcon} />
        Remove
      </button>
    </div>
  </div>
);

const CartSummary = ({
  cart,
  coupon,
  setCoupon,
  onApplyCoupon,
  couponApplied,
}) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = couponApplied ? subtotal * DISCOUNT_RATE : 0;
  const total = subtotal - discount;

  return (
    <div className={styles.summaryCard}>
      <h2 className={styles.summaryTitle}>Order Summary</h2>

      <div className={styles.summaryRow}>
        <span className={styles.summaryLabel}>Items ({cart.length})</span>
        <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
      </div>

      <div className={styles.summaryRow}>
        <span className={styles.summaryLabel}>Shipping</span>
        <span className={`${styles.summaryValue} ${styles.discount}`}>
          Free
        </span>
      </div>

      {couponApplied && (
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>Discount (10%)</span>
          <span className={`${styles.summaryValue} ${styles.discount}`}>
            -${discount.toFixed(2)}
          </span>
        </div>
      )}

      <hr className={styles.divider} />

      <div className={styles.couponWrap}>
        <input
          className={styles.couponInput}
          type="text"
          placeholder="Coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button className={styles.couponBtn} onClick={onApplyCoupon}>
          Apply
        </button>
      </div>

      <hr className={styles.divider} />

      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>${total.toFixed(2)}</span>
      </div>

      <button className={styles.payBtn}>
        <FiCreditCard /> Pay Now
      </button>
    </div>
  );
};

const EmptyCart = () => (
  <div className={styles.emptyWrap}>
    <FiShoppingBag className={styles.emptyIcon} />
    <h2 className={styles.emptyTitle}>Your cart is empty</h2>
    <p className={styles.emptyText}>
      Looks like you haven't added anything yet. Start exploring our products.
    </p>
    <Link to="/products" className={styles.shopBtn}>
      Browse Products <FiArrowRight />
    </Link>
  </div>
);

const CartPage = () => {
  const { cart, removeFromCart, cartSize } = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const onApplyCoupon = () => {
    if (coupon.trim().toLowerCase() === "save10") {
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try SAVE10");
      setCouponApplied(false);
    }
  };

  const isEmpty = cartSize === 0;

  return (
    <PageWrapper title="Cart" className={styles.page}>
      <div className={styles.container}>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <>
            <h1 className={styles.pageTitle}>Shopping Cart</h1>
            <p className={styles.itemCount}>
              {cartSize} item{cartSize !== 1 && "s"} in your cart
            </p>
            <div className={styles.layout}>
              <div className={styles.itemsCol}>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
              <CartSummary
                cart={cart}
                coupon={coupon}
                setCoupon={setCoupon}
                onApplyCoupon={onApplyCoupon}
                couponApplied={couponApplied}
              />
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default CartPage;
