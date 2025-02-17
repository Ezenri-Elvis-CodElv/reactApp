import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router";
import "./Header.css";

const Header = () => {
  const [showDropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const navigate = useNavigate();
  const data = ["nike", "adidas", "new-balance", "yeezy", "puma", "asics"];

  const handleBackToHome = () => {
    console.log("Gone!!");
    setTimeout(() => {
      navigate(`/Shop/${data[4]}`);
    }, 3000);
  };

  return (
    <div className="HeaderWrapper">
      <div onClick={handleBackToHome} className="Logo">
        <img src="src/assets/Facelogo.png" alt=""  className="imgHeader"/>
        LOGO
      </div>
      
      <nav>
        <ul>
          <li>
            <div className="dropdown-wrapper">
              <button className="toggle-button" onClick={toggleDropdown}>
                Category <RiArrowDropDownLine size={25} />
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <ul>
                    <li>Rolex</li>
                    <li>Hublot</li>
                    <li>Jacob&amp;Co</li>
                    <li>Audemars Piguet</li>
                    <li>Cartier</li>
                    <li>OMEGA</li>
                    <li>Patek Philippe</li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <NavLink to={"/"} className="Navlink">
            <li>Home</li>
          </NavLink>
          <NavLink to={"/Contact"} className="Navlink">
            <li>Contact</li>
          </NavLink>
          <NavLink to={`/Shop/${data[1]}`}className="Navlink">
            <li>Shop</li>
          </NavLink>
        </ul>
        <div className="SearchBar">
          <input
            type="text"
            placeholder="🔎Search for Brand"
            className="HeaderSearch"
          />
          <button className="Btn">Search</button>
        </div>
      </nav>
      <div className="HeaderFooter">
        <MdOutlineFavoriteBorder size={25} onClick={() => navigate()} />
        <FaShoppingCart size={25} onClick={() => navigate("/Cart")} />
        <CgProfile size={25} onClick={() => navigate("/dashboard")} />
      </div>
    </div>
  );
};

export default Header;