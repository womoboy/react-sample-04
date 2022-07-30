import Navbar from '../components/navbar/Navbar';
import Announcement from '../components/announcement/Announcement';
import Footer from '../components/footer/Footer';
import './Cart.css';

const Cart = () => {
    return (
        <div className="cart-page">
            <Navbar />
            <Announcement />
            <div className="wrapper">
                <h1 className='title'>YOUR BAG</h1>
                <div className="top">
                    <button>CONTINUE SHOPPING</button>
                    <div className="top-texts">
                        <span>Shopping bag (2)</span>
                        <span>Your Wishlist (0)</span>
                    </div>
                    <button>CHECKOUT NOW</button>
                </div>
                <div className="bottom"></div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
