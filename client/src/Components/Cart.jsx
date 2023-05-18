import React from "react";
import "./Cart.css";

export default function Cart() {
  return (
    <div>
      <div class="navbar">
        <div class="logo">
          <a href="../index.html">
            <img
              src="https://www.icicibank.com/managed-assets/images/offer-zone/brand-logos/pepperfry.png"
              alt="no load"
            />
          </a>
        </div>
        <div class="mid-nav">
          <div class="cart-logo">
            <div>
              <span id="cart1" class="material-icons-outlined">
                {" "}
                shopping_cart{" "}
              </span>
            </div>
            <div>
              <span id="cart2" class="material-icons-outlined">
                {" "}
                shopping_cart{" "}
              </span>
            </div>
            <div>
              <span id="cart3" class="material-icons-outlined">
                {" "}
                shopping_cart{" "}
              </span>
            </div>
          </div>
          <div class="cart-bottom">
            <a href="">Cart</a> <a href="">------ Delivery & Billing Address</a>{" "}
            <a href=""> ------ Payment</a>
          </div>
        </div>
        <div class="right-nav">
          <span id="user-name">WELCOME Bala Murugan</span>
          <span class="material-icons-outlined"> notifications </span>
        </div>
      </div>
      <hr class="hr" />

      <div id="container">
        <h3 id="in_cart"></h3>
        <div id="box1">
          <div id="pin">
            Enter Your Pincode For Delivery & Assembly Information
            <input type="number" name="" id="pincode" placeholder="Pincode" />
            <button id="gobtn" onclick="mycheck()">
              GO
            </button>
          </div>
          <div id="dis"></div>
        </div>
        <div id="box2">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/815/815252.png"
              alt=""
            />
            <p>Apply Coupon</p>
          </div>
          <div>
            <div class="value">
              <div>
                <p>Cart value</p>
                <p id="cp"></p>
              </div>
              <div>
                <p style={{ color: "green" }}>Retail Discount</p>
                <p style={{ color: "green" }} id="pr"></p>
              </div>
              <div>
                <p>Delivery (FREE)</p>
                <p>₹&nbsp; 0</p>
              </div>
              <div id="ass">
                <p>Assembly</p>
                <p>₹&nbsp; 449</p>
              </div>
              <div id="gi">
                <p>GiveIndia</p>
                <p>₹&nbsp; 99</p>
              </div>

              <p>Delivery & Assembly Charges Extra. Enter Pincode To Know</p>
            </div>
            <hr />
            <div class="value">
              <div>
                <h4>Total</h4>
                <h4 id="total"></h4>
              </div>
              <h5>(inclusive of all taxes)</h5>
            </div>
            <hr />
            <div class="value">
              <p>
                No Cost EMI Available Starting <u>₹ 8,100/month.</u> EMI
                Starting <u>₹ 2,288/month</u>
              </p>
            </div>
          </div>

          <div id="last">
            <input
              type="checkbox"
              id="myCheck"
              name="checkbox"
              onclick="myFunction() "
            />
            <label
              style={{
                color: "darkgray",
                fontWeight: "bold",
                fontSize: "12px",
              }}
              for=""
            >
              Contribute Rs.99 For COVID Relief Through GiveIndia.
            </label>

            <br />

            <input type="checkbox" id="" name="checkbox" />
            <label
              style={{
                color: "darkgray",
                fontWeight: "bold",
                fontSize: "12px",
              }}
              for=""
            >
              Use GSTIN For Business Purchase (Optional)
            </label>
            <br />
            <a href="checkout.html">
              <button id="place_order" onclick="goto()">
                PLACE ORDER
              </button>
            </a>
          </div>
        </div>
      </div>

      <div class="footer">
        <img src="https://i.ibb.co/0r2X3Ct/Capture.png" alt="" />
      </div>
    </div>
  );
}
