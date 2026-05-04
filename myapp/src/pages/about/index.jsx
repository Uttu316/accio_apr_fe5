import { FiHeart, FiGlobe, FiAward, FiUsers } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import styles from "./about.module.css";
import PageWrapper from "../../components/pageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper title="About" className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <img
          className={styles.bannerImg}
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
          alt="Team working in a modern office"
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>Our Story</h1>
          <p className={styles.bannerSub}>
            Building the future of online shopping — one happy customer at a
            time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyContent}>
          <div className={styles.storyTextWrap}>
            <h2 className={styles.storyTitle}>Who We Are</h2>
            <p className={styles.storyText}>
              ShopVibe started in 2020 with a simple idea: make quality products
              accessible to everyone. What began as a small online store has
              grown into a trusted marketplace serving thousands of customers
              worldwide. We partner directly with brands and artisans to bring
              you authentic products at fair prices — no middlemen, no markups.
            </p>
          </div>
          <img
            className={styles.storyImg}
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"
            alt="Team collaborating at a table"
          />
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <h2 className={styles.valuesHeading}>What We Stand For</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiHeart />
            </div>
            <h3 className={styles.valueTitle}>Customer First</h3>
            <p className={styles.valueDesc}>
              Every decision we make starts with one question — does this make
              our customers' lives easier?
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiAward />
            </div>
            <h3 className={styles.valueTitle}>Quality Guaranteed</h3>
            <p className={styles.valueDesc}>
              We vet every product and seller on our platform. If it doesn't
              meet our standards, it doesn't make the cut.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiGlobe />
            </div>
            <h3 className={styles.valueTitle}>Sustainability</h3>
            <p className={styles.valueDesc}>
              From eco-friendly packaging to carbon-neutral shipping, we're
              committed to reducing our environmental footprint.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiUsers />
            </div>
            <h3 className={styles.valueTitle}>Community</h3>
            <p className={styles.valueDesc}>
              We support local artisans and small businesses, helping them reach
              a global audience through our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div>
            <p className={styles.statNumber}>50K+</p>
            <p className={styles.statLabel}>Happy Customers</p>
          </div>
          <div>
            <p className={styles.statNumber}>10K+</p>
            <p className={styles.statLabel}>Products Listed</p>
          </div>
          <div>
            <p className={styles.statNumber}>120+</p>
            <p className={styles.statLabel}>Countries Served</p>
          </div>
          <div>
            <p className={styles.statNumber}>4.8</p>
            <p className={styles.statLabel}>Average Rating</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <h2 className={styles.teamHeading}>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <FaUserTie />
            </div>
            <p className={styles.teamName}>Alex Johnson</p>
            <p className={styles.teamRole}>Founder & CEO</p>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <FaUserTie />
            </div>
            <p className={styles.teamName}>Maria Chen</p>
            <p className={styles.teamRole}>Head of Product</p>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <FaUserTie />
            </div>
            <p className={styles.teamName}>David Park</p>
            <p className={styles.teamRole}>Lead Engineer</p>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <FaUserTie />
            </div>
            <p className={styles.teamName}>Lina Patel</p>
            <p className={styles.teamRole}>Customer Success</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
export default AboutPage;
