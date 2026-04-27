import styles from "./productsFilters.module.css";

const ProductsFiters = ({ filter, setFilter }) => {
  return (
    <div className={styles.filterBar}>
      <p className={styles.filterLabel}>Filter By:</p>
      <div className={styles.filterButtons}>
        <FilterItem
          label="All"
          value="all"
          onClick={setFilter}
          selected={filter}
        />
        <FilterItem
          label="Men's Clothing"
          value="men's clothing"
          onClick={setFilter}
          selected={filter}
        />
        <FilterItem
          label="Women's Clothing"
          value="women's clothing"
          onClick={setFilter}
          selected={filter}
        />
        <FilterItem
          label="Electronics"
          value="electronics"
          onClick={setFilter}
          selected={filter}
        />
        <FilterItem
          label="Jewellery"
          value="jewelery"
          onClick={setFilter}
          selected={filter}
        />
      </div>
    </div>
  );
};

export const FilterItem = ({ label, value, onClick, selected }) => {
  const isActive = value === selected;
  return (
    <button
      className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};

export default ProductsFiters;
