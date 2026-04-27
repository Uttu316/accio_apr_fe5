import { useMemo } from "react";
import ProductItem from "./productItem";
import styles from "./productsLists.module.css";

const ProductsList = ({ products, filter }) => {
  const filteredProducts = useMemo(() => {
    const filteredProducts =
      filter === "all"
        ? products
        : products.filter((item) => item.category === filter);

    return filteredProducts;
  }, [filter, products]);
  return (
    <div className={styles.grid}>
      {filteredProducts.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
};
export default ProductsList;
