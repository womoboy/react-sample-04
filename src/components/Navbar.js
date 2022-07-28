import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import * as React from "react";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <span className="language">EN</span>
            <div className="search-container">
              <input type="text" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </div>
          </div>
          <div className="center">
            <h2>TESTLOGO.</h2>
          </div>
          <div className="right">
            <div className="menu-item">REGISTER</div>
            <div className="menu-item">SIGN IN</div>
            <div className="menu-item">
              <Badge badgeContent={3} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
