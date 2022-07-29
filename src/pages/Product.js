import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-page">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <div className="image-container">
          <img src="/library/pants.jpg" alt="a women pants" />
        </div>
        <div className="info-container">
          <h1 className="title">Denim Jumpsuit</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            reprehenderit facere deserunt qui consequuntur ipsa corporis minus
            sed aspernatur magnam facilis impedit quibusdam sequi, ipsum libero
            voluptatibus tenetur quos. Dolore?
          </p>
          <span className="price">$ 20</span>
          <div className="filter-container">
            <div className="filter">
              <span className="title">Color</span>
              <span className="color black"></span>
              <span className="color red"></span>
              <span className="color blue"></span>
              <span className="color green"></span>
            </div>
            <div className="filter">
              <span className="title">Size</span>
              <select className="filter-size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
                <Remove />
                <span className="amount">1</span>
                <Add />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
