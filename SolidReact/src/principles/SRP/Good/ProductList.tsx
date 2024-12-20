import { useProducts } from "./hooks/useProducts";
import { useRateFilter } from "./hooks/useRateFilter";
import { Filter, filterProducts } from "./Filter";
import ProductItem from "./ProductItem";
import "../Style.css";

const ProductList = () => {
  const { products } = useProducts();
  const { filterRate, handleRating } = useRateFilter();

  return (
    <div className='wrapper'>
      <Filter filterRate={filterRate as number} handleRating={handleRating} />
      {filterProducts(products, filterRate).map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductList;