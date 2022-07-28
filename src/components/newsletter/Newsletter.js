import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Newsletter.css';

const Newsletter = () => {
    return (  
        <div className="newsletter">
            <h2 className="title">Newsletter</h2>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className="input-container">
                <input type="text" placeholder='Your email'></input>
                <button>
                    <SendOutlinedIcon />
                </button>
            </div>
        </div>
    );
}
 
export default Newsletter;