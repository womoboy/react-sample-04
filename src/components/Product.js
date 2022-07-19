import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'

const Product = ({item}) => {
    return (  
        <div className="product">
            <div className="circle"></div>
            <img src={`/library/${item.img}`} alt={item.alt} />
            <div className="info">
                <div className="icon">
                    <ShoppingCartOutlinedIcon />
                </div>
                <div className="icon">
                    <SearchOutlined />
                </div>
                <div className="icon">
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    );
}
 
export default Product;
