import React, { useState } from "react";
import SigninModel from "./SigninModel";
import LoginModel from "./LoginModel";
import { useDispatch, useSelector } from "react-redux";
import { clearLocalStorage } from "../Utils/localStorage";
import { setUserName } from "../Redux/action";

export default function Navbar() {
  const { username, isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [dropDowns, setDropDowns] = useState({
    isFurniture: false,
    isLiving: false,
  });

  const handleOnMouseHover = (type) => {
    setDropDowns((prevState) => ({ ...prevState, [type]: true }));
  };

  const handleOnMouseOut = (type) => {
    setDropDowns((prevState) => ({ ...prevState, [type]: false }));
  };

  const logOut = () => {
    clearLocalStorage();
    dispatch(setUserName(null));
  };

  // signin and login

  const [signinModel, setsigninModel] = useState(false);
  // console.log("signinModel:", signinModel);
  const [loginModel, setLoginModel] = useState(false);

  const [signinDiv, setsigninDiv] = useState(false);
  const [loginDiv, setLoginDiv] = useState(false);

  return (
    <div id="navbar">
      <div id="links">
        <div id="logo">
          <a href="/">
            <img src="https://techstory.in/wp-content/uploads/2018/03/Pepperfry.png" />
          </a>
        </div>
        <div id="searchbar">
          <input type="search" placeholder="Search" />
          <i className="material-icons-outlined">search</i>
        </div>
        <div id="icon">
          <div className="links">
            <span className="material-icons-outlined"> local_shipping </span>
            <span>Track</span>
          </div>
          <div className="links">
            <span className="material-icons-outlined"> favorite_border </span>
            <span>Wishlist</span>
          </div>
          <div className="links">
            <a href="/cart">
              <span className="material-icons-outlined"> shopping_cart </span>
            </a>
            <span>Cart</span>
          </div>
          <div
            className="links"
            id="profile"
            onMouseOver={() => setsigninDiv(true)}
            onMouseOutCapture={() => setsigninDiv(false)}
          >
            <span className="material-icons-outlined"> person_outline </span>
            <span>{username ? username : "Profile"}</span>
            {signinDiv ? (
              <div id="signin-div">
                {username ? (
                  <button onClick={() => logOut()}>Logout</button>
                ) : (
                  <button
                    onClick={() => setLoginModel(true)}
                    id="signin-div-btn"
                  >
                    LOGIN/REGISTER
                  </button>
                )}
                <p>To access your account & manage orders</p>
              </div>
            ) : null}
            <div id="login-div"></div>
          </div>
        </div>
      </div>

      <div id="category">
        <div
          id="f"
          onMouseOver={() => handleOnMouseHover("isFurniture")}
          onMouseOut={() => handleOnMouseOut("isFurniture")}
        >
          <a href="#">Furniture</a>
        </div>
        <div id="l">
          <a href="#">Living</a>
        </div>
        <div>
          <a href="#">Bedroom</a>
        </div>
        <div>
          <a href="#">Kids Room</a>
        </div>
        <div>
          <a href="#">Mattresses</a>
        </div>
        <div>
          <a href="#">Furnishings</a>
        </div>
        <div>
          <a href="#">Decor</a>
        </div>
        <div>
          <a href="#">Lighting</a>
        </div>
        <div>
          <a href="#">Appliances</a>
        </div>
        <div style={{ marginRight: "0px" }}>
          <a href="#">Modular Furniture</a>
        </div>
      </div>

      <div id="dropdown">
        <div
          style={{ display: dropDowns.isFurniture ? "block" : "none" }}
          id="furniture-dropdown"
          onMouseOver={() => handleOnMouseHover("isFurniture")}
          onMouseOut={() => handleOnMouseOut("isFurniture")}
        >
          <div id="furniture-a">
            <span>Sofas</span>
            <span>Seating</span>
            <span>Chairs</span>
            <span>Tables</span>
            <span>Cabinetry</span>
            <span>Dining & Bar</span>
            <span>Beds</span>
          </div>
          <div style={{ display: "flex" }}>
            <div className="furniture-b">
              <a href="/products">Sofas</a>
              <a style={{ color: "gray" }} href="#">
                1Seater Sofas
              </a>
              <a style={{ color: "gray" }} href="#">
                2Seater Sofas
              </a>
              <a style={{ color: "gray" }} href="#">
                3Seater Sofas
              </a>
              <a href="#">Sofa Sets</a>
              <a href="#">Sectional Sofas</a>
              <a href="#">Sofa Cum Beds</a>
              <a href="#">Recliners</a>
              <a href="#">Futons</a>
              <a href="#">Sofa Spa</a>
            </div>
            <div className="furniture-b" style={{ backgroundColor: "#F5F5F5" }}>
              <a href="#">Settees</a>
              <a href="#">Benches</a>
              <a href="#">Chaise Loungers</a>
              <a href="#">Recamiers</a>
              <a href="#">Ottomans</a>
              <a href="#">Pouffes</a>
              <a href="#">Foot Stools</a>
              <a href="#">Seating Stools</a>
              <a href="#">Bean Bags</a>
              <a href="#">Swings</a>
              <a href="#">Hammocks</a>
            </div>
            <div className="furniture-b">
              <a href="#">Arm Chairs</a>
              <a href="#">Rocking Chairs</a>
              <a href="#">Lounge Chairs</a>
              <a href="#">Cafe Chairs</a>
              <a href="#">Iconic Chairs</a>
              <a href="#">Slipper Chairs</a>
              <a href="#">Barrel Chairs</a>
              <a href="#">Cantilever Chairs</a>
              <a href="#">Folding Chairs</a>
              <a href="#">Plastic Chairs</a>
              <a href="#">Wing Chairs</a>
              <a href="#">Office Chairs</a>
              <a href="#">Patio Chairs</a>
            </div>
            <div className="furniture-b" style={{ backgroundColor: "#F5F5F5" }}>
              <a href="#">Coffee Tables</a>
              <a href="#">Coffee Tables Sets</a>
              <a href="#">End Tables</a>
              <a href="#">Nest ofTables</a>
              <a href="#">Console Tables</a>
              <a href="#">Portable Tables</a>
              <a href="#">Study Tables</a>
              <a href="#">Dressing Tables</a>
              <a href="#">Bedside Tables</a>
              <a href="#">Office Tables</a>
              <a href="#">Patio Tables & Sets</a>
              <a style={{ backgroundColor: "gray" }} href="#">
                Patio Sets
              </a>
              <a style={{ backgroundColor: "gray" }} href="#">
                Patio Tables
              </a>
            </div>
            <div className="furniture-b">
              <a href="#">Shoe Racks</a>
              <a href="#">Entertainment Units</a>
              <a href="#">Cabinet & Sideboards</a>
              <a href="#">Chest of Drawers</a>
              <a href="#">Book Shelves</a>
              <a href="#">Book Cases</a>
              <a href="#">Trunks</a>
              <a href="#">Wardrobes</a>
              <a href="#">Modular Wardrobes</a>
              <a href="#">Plastic Cabinets</a>
              <a href="#">Office Cabinets</a>
            </div>
            <div className="furniture-b" style={{ backgroundColor: "#F5F5F5" }}>
              <a href="#">Dining Sets</a>
              <a href="#">Dining Chairs</a>
              <a href="#">Dining Tables</a>
              <a href="#">Bar Cabinets</a>
              <a href="#">Bar Trolleys</a>
              <a href="#">Wine Racks</a>
              <a href="#">Bar Stools</a>
              <a href="#">Bar Table Sets</a>
              <a href="#">Modular Kitchens</a>
            </div>
            <div className="furniture-b">
              <a href="#">Beds</a>
              <a style={{ color: "gray" }} href="#">
                Single Beds
              </a>
              <a style={{ color: "gray" }} href="#">
                Queen Size Beds
              </a>
              <a style={{ color: "gray" }} href="#">
                King Size Beds
              </a>
              <a href="#">Upholstered Beds</a>
              <a href="#">Poster Beds</a>
              <a href="#">Bunk Beds</a>
              <a href="#">Folding Beds</a>
              <a href="#">Mattresses</a>
            </div>
          </div>
        </div>

        <div id="dropdown-two">
          <div id="living-dropdown">
            <div id="furniture-a">
              <span>Sofas</span>
              <span>Seating</span>
              <span>Chairs</span>
              <span>Tables</span>
              <span>Cabinetry</span>
              <span>Decor</span>
              <span>Lighting</span>
            </div>
            <div style={{ display: "flex" }}>
              <div className="furniture-b">
                <a href="/products">Sofas</a>
                <a style={{ backgroundColor: "gray" }} href="#">
                  1Seater Sofas
                </a>
                <a style={{ backgroundColor: "gray" }} href="#">
                  2Seater Sofas
                </a>
                <a style={{ backgroundColor: "gray" }} href="#">
                  3Seater Sofas
                </a>
                <a href="#">Sofa Sets</a>
                <a href="#">Sectional Sofas</a>
                <a href="#">Sofa Cum Beds</a>
                <a href="#">Recliners</a>
                <a href="#">Futons</a>
                <a href="#">Sofa Spa</a>
              </div>
              <div
                className="furniture-b"
                style={{ backgroundColor: "#F5F5F5", height: "345px" }}
              >
                <a href="#">Settees</a>
                <a href="#">Benches</a>
                <a href="#">Chaise Loungers</a>
                <a href="#">Recamiers</a>
                <a href="#">Ottomans</a>
                <a href="#">Pouffes</a>
                <a href="#">Foot Stools</a>
                <a href="#">Seating Stools</a>
                <a href="#">Bean Bags</a>
                <a href="#">Bar Stools</a>
              </div>
              <div className="furniture-b">
                <a href="#">Arm Chairs</a>
                <a href="#">Rocking Chairs</a>
                <a href="#">Lounge Chairs</a>
                <a href="#">Cafe Chairs</a>
                <a href="#">Iconic Chairs</a>
                <a href="#">Slipper Chairs</a>
                <a href="#">Barrel Chairs</a>
                <a href="#">Cantilever Chairs</a>
                <a href="#">Folding Chairs</a>
                <a href="#">Plastic Chairs</a>
                <a href="#">Wing Chairs</a>
                <a href="#">Chair Spa</a>
              </div>
              <div
                className="furniture-b"
                style={{ backgroundColor: "#F5F5F5", height: "345px" }}
              >
                <a href="#">Coffee Tables</a>
                <a href="#">Coffee Tables Sets</a>
                <a href="#">End Tables</a>
                <a href="#">Nest ofTables</a>
                <a href="#">Console Tables</a>
                <a href="#">Study Tables</a>
                <a href="#">Portable Tables</a>
                <a href="#">Bar Table Sets</a>
              </div>
              <div className="furniture-b">
                <a href="#">Shoe Racks</a>
                <a href="#">Entertainment Units</a>
                <a href="#">Cabinet & Sideboards</a>
                <a href="#">Book Shelves</a>
                <a href="#">Book Cases</a>
                <a href="#">Trunks</a>
                <a href="#">Plastic Cabinets</a>
                <a href="#">Bar Cabinets</a>
                <a href="#">Bar Trolleys</a>
              </div>
              <div
                className="furniture-b"
                style={{ backgroundColor: "#F5F5F5", height: "345px" }}
              >
                <a href="#">Wall Shelves</a>
                <a href="#">Wall Art</a>
                <a href="#">Clocks</a>
                <a href="#">Mandirs</a>
                <a href="#">Table Decor</a>
                <a href="#">Vases</a>
                <a href="#">Figurines</a>
                <a href="#">Photo Frames</a>
                <a href="#">Key Holders</a>
              </div>
              <div className="furniture-b">
                <a href="#">Chandeliers</a>
                <a href="#">Wall Lights</a>
                <a href="#">Floor Lamps</a>
                <a href="#">Hanging Lights</a>
                <a href="#">Table Lamps</a>
                <a href="#">Flush Mounts</a>
                <a href="#">Panel Lights</a>
                <a href="#">Tea Light Holders</a>
                <a href="#">String Lights</a>
                <a href="#">Picture Light</a>
                <a href="#">Candle Holders</a>
              </div>
            </div>
          </div>

          {isLoading ? (
            <img
              className="loading-img"
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt=""
            />
          ) : null}

          {signinModel ? (
            <SigninModel
              setLoginModel={setLoginModel}
              setsigninModel={setsigninModel}
            />
          ) : null}

          {loginModel ? (
            <LoginModel
              setLoginModel={setLoginModel}
              setsigninModel={setsigninModel}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
