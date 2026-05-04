import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import styles from "./contact.module.css";
import PageWrapper from "../../components/pageWrapper";

const ContactPage = () => {
  return (
    <PageWrapper title="Contact Us" className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <img
          className={styles.bannerImg}
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
          alt="Customer support headset on desk"
        />
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>Get in Touch</h1>
          <p className={styles.bannerSub}>
            Have a question or need help? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className={styles.content}>
        {/* Info Cards */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.iconPurple}`}>
              <FiMail />
            </div>
            <div>
              <h3 className={styles.infoTitle}>Email Us</h3>
              <p className={styles.infoText}>
                support@shopvibe.com
                <br />
                We typically respond within 24 hours.
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.iconBlue}`}>
              <FiPhone />
            </div>
            <div>
              <h3 className={styles.infoTitle}>Call Us</h3>
              <p className={styles.infoText}>
                +1 (800) 123-4567
                <br />
                Mon – Fri, 9 AM – 6 PM EST
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.iconGreen}`}>
              <FiMapPin />
            </div>
            <div>
              <h3 className={styles.infoTitle}>Visit Us</h3>
              <p className={styles.infoText}>
                123 Commerce Street
                <br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.iconOrange}`}>
              <FiClock />
            </div>
            <div>
              <h3 className={styles.infoTitle}>Business Hours</h3>
              <p className={styles.infoText}>
                Monday – Friday: 9 AM – 6 PM
                <br />
                Saturday: 10 AM – 4 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <form className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Full Name
              </label>
              <input
                className={styles.input}
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email Address
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="subject">
                Subject
              </label>
              <input
                className={styles.input}
                id="subject"
                placeholder="How can we help?"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.textarea}
                id="message"
                placeholder="Tell us more about your inquiry..."
              />
            </div>
            <button className={styles.submitBtn} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Image */}
      <section className={styles.mapSection}>
        <img
          className={styles.mapImg}
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1100&q=80"
          alt="World map"
        />
        <div className={styles.mapOverlay}>
          <p className={styles.mapText}>We ship to 120+ countries worldwide</p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>How long does shipping take?</p>
            <p className={styles.faqAnswer}>
              Standard shipping takes 5–7 business days. Express shipping is
              available for 2–3 day delivery on most items.
            </p>
          </div>
          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>What is your return policy?</p>
            <p className={styles.faqAnswer}>
              We offer a 30-day hassle-free return policy. Items must be in
              original condition with tags attached.
            </p>
          </div>
          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>Do you ship internationally?</p>
            <p className={styles.faqAnswer}>
              Yes, we ship to over 120 countries. International shipping rates
              and delivery times vary by destination.
            </p>
          </div>
          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>How can I track my order?</p>
            <p className={styles.faqAnswer}>
              Once your order ships, you'll receive a tracking number via email.
              You can also check order status in your account dashboard.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
export default ContactPage;
