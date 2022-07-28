import useFetch from "../../custom/useFetch";
import Product from "../../components/product/Product";
import './Products.css'

const Products = () => {
  const url = "http://localhost:8000/popularProducts";
  const [response, error, isPending] = useFetch(url);

  return (
    <div className="products">
      {response &&
        response.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Products;
