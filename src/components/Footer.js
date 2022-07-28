import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left child-frame">
        <h3 className="logo">TESTLOGO.</h3>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque
          aspernatur obcaecati, facilis asperiores officia.
        </p>
        <div className="social-container">
          <div className="social-icon">
            <FacebookIcon />
          </div>
          <div className="social-icon">
            <InstagramIcon />
          </div>
          <div className="social-icon">
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="center child-frame">
        <h3 className="title">Usefull Links</h3>
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">Cart</li>
          <li className="list-item">Man Fashion</li>
          <li className="list-item">Women Fashion</li>
          <li className="list-item">Accessories</li>
          <li className="list-item">My Account</li>
          <li className="list-item">Order Tracking</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Terms</li>
        </ul>
      </div>
      <div className="right child-frame">
        <h3 className="title">Contact</h3>
        <div className="contact-item">
          <RoomIcon style={{marginRight: "10px"}} /> 662 Dixie Path, South Tobinchester 98336
        </div>
        <div className="contact-item">
          <PhoneIcon style={{marginRight: "10px"}} /> +1 234 56 78
        </div>
        <div className="contact-item">
          <EmailIcon style={{marginRight: "10px"}} /> contact@gmail.com
        </div>
        <img className="payment" src="library/payment.png" />
      </div>
    </footer>
  );
};

export default Footer;
