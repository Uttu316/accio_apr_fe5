import Header from "../../components/header";
import Footer from "../../components/footer";
import { FiTruck, FiShield, FiCreditCard, FiHeadphones } from "react-icons/fi";
import {
  FaTshirt,
  FaLaptop,
  FaGem,
  FaCouch,
  FaRunning,
  FaBook,
} from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import styles from "./home.module.css";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header title="ShopVibe" />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>New Season Collection</span>
            <h1 className={styles.heroTitle}>Discover Products You'll Love</h1>
            <p className={styles.heroSub}>
              Shop the latest trends in fashion, electronics, and lifestyle.
              Premium quality at prices that make sense.
            </p>
            <div className={styles.heroBtns}>
              <Link to="/products" className={styles.btnPrimary}>
                Shop Now
              </Link>
              <Link to="/products" className={styles.btnOutline}>
                View Deals
              </Link>
            </div>
          </div>
          <img
            className={styles.heroImg}
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&q=80"
            alt="Shopping bags with colorful items"
          />
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Shop With Us</h2>
        <p className={styles.sectionSub}>
          We go the extra mile so you don't have to
        </p>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconPurple}`}>
              <FiTruck />
            </div>
            <h3 className={styles.featureTitle}>Free Shipping</h3>
            <p className={styles.featureDesc}>
              Free delivery on all orders over $50. Fast and reliable shipping
              worldwide.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconBlue}`}>
              <FiShield />
            </div>
            <h3 className={styles.featureTitle}>Secure Payments</h3>
            <p className={styles.featureDesc}>
              Your transactions are protected with industry-leading encryption.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconGreen}`}>
              <FiCreditCard />
            </div>
            <h3 className={styles.featureTitle}>Easy Returns</h3>
            <p className={styles.featureDesc}>
              Not satisfied? Return any item within 30 days for a full refund.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconOrange}`}>
              <FiHeadphones />
            </div>
            <h3 className={styles.featureTitle}>24/7 Support</h3>
            <p className={styles.featureDesc}>
              Our team is always here to help you with any questions or
              concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <p className={styles.sectionSub}>Browse our curated collections</p>
        </div>
        <div className={styles.catGrid}>
          <div className={styles.catCard}>
            <img
              className={styles.catImg}
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80"
              alt="Fashion"
            />
            <div className={styles.catOverlay}>
              <FaTshirt className={styles.catIconInline} />
              <p className={styles.catName}>Fashion</p>
            </div>
          </div>
          <div className={styles.catCard}>
            <img
              className={styles.catImg}
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80"
              alt="Electronics"
            />
            <div className={styles.catOverlay}>
              <FaLaptop className={styles.catIconInline} />
              <p className={styles.catName}>Electronics</p>
            </div>
          </div>
          <div className={styles.catCard}>
            <img
              className={styles.catImg}
              src="https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=400&q=80"
              alt="Jewellery"
            />
            <div className={styles.catOverlay}>
              <FaGem className={styles.catIconInline} />
              <p className={styles.catName}>Jewellery</p>
            </div>
          </div>
          <div className={styles.catCard}>
            <img
              className={styles.catImg}
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80"
              alt="Home and Living"
            />
            <div className={styles.catOverlay}>
              <FaCouch className={styles.catIconInline} />
              <p className={styles.catName}>Home & Living</p>
            </div>
          </div>
          <div className={styles.catCard}>
            <img
              className={styles.catImg}
              src="https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&q=80"
              alt="Sports"
            />
            <div className={styles.catOverlay}>
              <FaRunning className={styles.catIconInline} />
              <p className={styles.catName}>Sports</p>
            </div>
          </div>
          <div className={styles.catCard}>
            <img
              className={styles.catImg}
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
              alt="Books"
            />
            <div className={styles.catOverlay}>
              <FaBook className={styles.catIconInline} />
              <p className={styles.catName}>Books</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className={styles.promo}>
        <div className={styles.promoCard}>
          <img
            className={styles.promoImg}
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
            alt="Woman shopping with bags"
          />
          <div className={styles.promoOverlay}>
            <h2 className={styles.promoTitle}>Summer Sale — Up to 40% Off</h2>
            <p className={styles.promoText}>
              Limited time offer on thousands of items. Don't miss out.
            </p>
            <button className={styles.promoBtn}>Explore Deals</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <p className={styles.sectionSub}>Real reviews from real shoppers</p>
        <div className={styles.testGrid}>
          <div className={styles.testCard}>
            <p className={styles.testQuote}>
              "Amazing quality and super fast delivery. This is my go-to store
              for everything now."
            </p>
            <div className={styles.testAuthor}>
              <div className={styles.testAvatar}>
                <FaUserCircle />
              </div>
              <div>
                <p className={styles.testName}>Sarah M.</p>
                <p className={styles.testRole}>Verified Buyer</p>
              </div>
            </div>
          </div>
          <div className={styles.testCard}>
            <p className={styles.testQuote}>
              "The return process was seamless. Great customer service and
              beautiful products."
            </p>
            <div className={styles.testAuthor}>
              <div className={styles.testAvatar}>
                <FaUserCircle />
              </div>
              <div>
                <p className={styles.testName}>James R.</p>
                <p className={styles.testRole}>Verified Buyer</p>
              </div>
            </div>
          </div>
          <div className={styles.testCard}>
            <p className={styles.testQuote}>
              "Best prices I've found online. The deals section is incredible —
              saved over $200 last month."
            </p>
            <div className={styles.testAuthor}>
              <div className={styles.testAvatar}>
                <FaUserCircle />
              </div>
              <div>
                <p className={styles.testName}>Priya K.</p>
                <p className={styles.testRole}>Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default HomePage;
