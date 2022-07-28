import './CategoryItem.css';

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
      <div className="container">
        <img src={`http://localhost:3000/library/${item.img}`}></img>
        <div className="info">
          <div className="title">{item.title}</div>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
