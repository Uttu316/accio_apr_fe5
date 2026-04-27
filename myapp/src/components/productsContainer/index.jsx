import { useCallback, useEffect, useState } from "react";
import ProductsFiters from "../productsFilters";
import ProductsList from "../productsLists";
import { API } from "../../services";
import styles from "./productsContainer.module.css";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [filter, setFilter] = useState("all");

  const getProducts = useCallback(async () => {
    try {
      const data = await API({ endpoint: "/products" });
      setProducts(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProducts = isDone && products.length !== 0;
  const noProducts = isDone && products.length === 0;

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <p className={styles.statusMsg}>Loading products for you...</p>
      )}
      {isError && (
        <p className={`${styles.statusMsg} ${styles.errorMsg}`}>
          Something went wrong
        </p>
      )}
      {noProducts && <p className={styles.statusMsg}>No product available</p>}
      {hasProducts && (
        <div className={styles.content}>
          <ProductsFiters filter={filter} setFilter={setFilter} />
          <ProductsList products={products} filter={filter} />
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
