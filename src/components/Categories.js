import { useState, useEffect } from "react";
import useFetch from "../custom/useFetch";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const url = "http://localhost:8000/categories";
  const [response, error, isPending] = useFetch(url);

  return (
    <div className="categories">
      <div className="container">
        {response &&
          response.map((item) => {
            return <CategoryItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default Categories;