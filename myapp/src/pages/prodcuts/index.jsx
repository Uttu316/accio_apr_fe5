import Footer from "../../components/footer";
import Header from "../../components/header";
import PageWrapper from "../../components/pageWrapper";
import ProductsContainer from "../../components/productsContainer";
import styles from "./products-page.module.css";

const ProductsPage = () => {
  return (
    <PageWrapper title="Products" className={styles.page}>
      <h1 className={styles.pageTitle}>Latest Products</h1>
      <ProductsContainer />
    </PageWrapper>
  );
};
export default ProductsPage;
