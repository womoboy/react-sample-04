import useFetch from "../custom/useFetch";
import CategoryItem from "./CategoryItem";
import './Categories.css';

const Categories = () => {
  const url = "http://localhost:8000/categories";
  const [response, error, isPending] = useFetch(url);

  return (
    <div className="categories">
      <h2 className="title">Categories</h2>
      <div className="container">
        {isPending && <div>Loading...</div>}
        {error && <div>Error! {error}</div>}
        {response &&
          response.map((item) => {
            return <CategoryItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Categories;
