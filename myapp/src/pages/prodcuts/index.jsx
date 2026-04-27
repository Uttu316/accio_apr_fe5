import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsContainer from "../../components/productsContainer";
import styles from "./products-page.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.page}>
      <Header title="Products" />
      <h1 className={styles.pageTitle}>Latest Products</h1>
      <ProductsContainer />
      <Footer />
    </div>
  );
};
export default ProductsPage;
