import React, { useEffect, useState } from "react";
import "./ProductInfo.css";
import Navbar from "./Navbar";
import FooterBar from "./FooterBar";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
  const queryParams = useParams();
  const productId = queryParams.id;

  const [product, setProduct] = useState({
    name: "",
    price: "",
    img: "",
    brand: "",
    cutPrice: "",
  });

  const backendUrl = `http://localhost:8080/products/${productId}`;

  const getdataFromBacked = () => {
    fetch(backendUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then((data) => {
        // Process the received data
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  useEffect(() => {
    getdataFromBacked();
  }, []);

  return (
    <div>
      <Navbar />
      <article>
        <div id="one">
          <span>
            {"Home > Furniture > Sofas & Loungers > Sofas > 2 Seater Sofas >"}{" "}
          </span>
          <span style={{ color: "black" }}>{product.name}</span>
        </div>
        <div className="content">
          <div className="left">
            <img id="sofaimg" src={product.img} />
            <div className="share-wishlist">
              <a href="#" className="share">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="share-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <p>Share This Product</p>
              </a>
              <a href="#" className="add-to-wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="add-to-wishlist-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <p>Add To Wishlist</p>
              </a>
            </div>
          </div>
          <div className="right">
            <h2 id="NAME" className="heading"></h2>
            <div id="BRAND" className="arra-div">
              {product.brand}
            </div>
            <div className="price">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rupee-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 id="mrp" className="mrp">
                {product.price}
              </h2>
              <div className="tax">(Inclusive of all taxes)</div>
            </div>
            <div className="saving">
              <div className="total-saving">Total savings</div>
              <a href="#" className="rupee">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rup"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span id="cutprice">{product.cutPrice}</span> (68% Off)
              </a>
            </div>
            <div>
              <img
                src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_VIPCoupon_c_011121_2x_New.jpg"
                alt="Offer-Image"
                className="offer-img"
              />
            </div>
            <div className="features">
              <div>
                <img
                  src="https://ii1.pepperfry.com/images/svg/w20-calender-icon.svg"
                  alt=""
                />
              </div>
              <a href="#" className="info emi-link">
                EMI from
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="emi-rupee-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                1,250 No Cost EMI
              </a>
              <div className="info">
                <img
                  src="https://ii1.pepperfry.com/images/svg/w20-warranty-icon.svg"
                  alt=""
                />
              </div>
              <div className="info">12 Months Warranty</div>
              <div>
                <img
                  src="https://ii1.pepperfry.com/images/svg/w20-returns-icon.svg"
                  alt=""
                />
              </div>
              <div className="info">Easy Returns</div>
              <div>
                <img
                  src="https://ii1.pepperfry.com/images/svg/w21-safe-delivery.svg"
                  alt=""
                />
              </div>
              <div>Safe Delivery</div>
            </div>
            <div className="offer-zone">
              <h3 className="more-offers">More Offers</h3>
              <div className="offers">
                <div className="card-offer">
                  ICICI Bank Debit & Credit Cards
                </div>
                <div className="card-details">
                  Get Extra 10% off on ICICI Bank Credit & Debit Cards . Maximum
                  Discount Rs 3000
                  <div className="code">
                    Code: <span className="coupon">ICICIPF10</span>
                  </div>
                </div>
                <div className="card-offer">ICICI Bank EMI</div>
                <div className="card-details">
                  Get Extra 10% off on EMI purchases through ICICI Bank Cards.
                  Maximum Discount Rs 5000
                </div>
                <div className="code">
                  Code: <span className="coupon">ICICIPFEMI10</span>
                </div>
                <div className="card-offer">
                  IDFC FIRST Bank Debit & Credit Cards
                </div>
                <div className="card-details">
                  Get Extra 10% off on IDFC FIRST Bank Credit & Debit Cards .
                  Maximum Discount Rs 1250
                </div>
                <div className="code">
                  Code: <span className="coupon">IDFCPF10</span>
                </div>
                <a href="#" className="see-all-offers">
                  See All Offers (5)
                </a>
              </div>
            </div>
            <div className="quantity">
              <h4 className="quant-display">Quantity</h4>
              <select name="quantity" id="options">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              <div className="pieces-left">Only 3 Left</div>
            </div>
            <div className="buttons">
              <button onclick="ADDTOCART()" className="add-to-cart">
                ADD TO CART
              </button>
              <a id="go">
                <button id="cart-btn" className="buy-now">
                  BUY NOW
                </button>
              </a>
            </div>
            <hr />
            <div className="delivery">
              <div className="delivery-heading">Delivery</div>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Pincode"
                  className="pincode-input"
                />
                <button className="pincode-btn">Apply</button>
                <div className="instruction-1">
                  Enter Pincode to get Delivery Date, Assembly Information and
                  other details
                </div>
                <div className="instruction-2">
                  Delivery & Assembly Charges Extra. Enter Pincode to Know
                </div>
              </div>
            </div>
            <hr />
            <div className="details">
              <div className="product-details">Details</div>
              <div className="full-details">
                <div className="point">
                  Brand: <span className="additional-details">ARRA</span>
                </div>
                <div className="point">
                  Dimensions:{" "}
                  <span className="additional-details">
                    {" "}
                    H 37.5 x W 62 x D 36 ; Seating Height:18 (all dimensions in
                    inches){" "}
                  </span>{" "}
                </div>
                <div className="point">
                  Weight: <span className="additional-details">46.2 KG</span>
                </div>
                <div className="point">
                  Warranty:{" "}
                  <span className="additional-details">
                    {" "}
                    12 Months' Warranty
                  </span>
                </div>
                <div className="point">
                  Assembly:{" "}
                  <span className="additional-details">Carpenter Assembly</span>
                </div>
                <div className="point">
                  Primary Material:{" "}
                  <span className="additional-details">Fabric</span>{" "}
                </div>
                <div className="point">
                  Room Type:{" "}
                  <span className="additional-details">Living Room</span>
                </div>
                <div className="point">
                  Seating Height: <span className="additional-details">18</span>
                </div>
                <div className="point">
                  Colour: <span className="additional-details">Beige</span>
                </div>
                <div className="point">
                  Sku:{" "}
                  <span className="additional-details">
                    FN1824825-P-WH35490
                  </span>
                </div>
                <a href="#" className="see-more-info">
                  See More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="full-width">
        <div className="post-article">
          <h2 className="sim-prod-heading">SIMILAR PRODUCTS</h2>
          <div className="sim-products">
            <a href="#">
              <div className="sim-prod">
                <img
                  src="https://ii1.pepperfry.com/media/catalog/product/r/i/266x293/riviera-2-seater-sofa-in-brown---greencolour-by-arra-riviera-2-seater-sofa-in-brown---greencolour-by-wv2bmb.jpg"
                  alt=""
                />
                <div className="sim-prod-name">
                  Riviera 2 Seater Sofa in Brown & Green C...
                </div>
                <div className="sim-prod-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="sim-prod-rupee-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>12,401</div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="sim-prod">
                <img
                  src="https://ii1.pepperfry.com/media/catalog/product/r/i/266x293/riviera-2-seater-sofa-in-grey---yellowcolour-by-arra-riviera-2-seater-sofa-in-grey---yellowcolour-by-larmtj.jpg"
                  alt=""
                />
                <div className="sim-prod-name">
                  Riviera 2 Seater Sofa in Grey & Yellow C...
                </div>
                <div className="sim-prod-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="sim-prod-rupee-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>12,401</div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="sim-prod">
                <img
                  src="https://ii1.pepperfry.com/media/catalog/product/r/o/266x293/rome-2-seater-sofa-in-blue-colour-by-arra-rome-2-seater-sofa-in-blue-colour-by-arra-gtsnt9.jpg"
                  alt=""
                />
                <div className="sim-prod-name">
                  Rome 2 Seater Sofa in Blue Colour b...
                </div>
                <div className="sim-prod-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="sim-prod-rupee-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>11,222</div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="sim-prod">
                <img
                  src="https://ii1.pepperfry.com/media/catalog/product/m/a/266x293/mario-2-seater-sofa-in-beige-colour-by-arra-mario-2-seater-sofa-in-beige-colour-by-arra-vowv2n.jpg"
                  alt=""
                />
                <div className="sim-prod-name">
                  Mario 2 Seater Sofa in Beige Colour b...
                </div>
                <div className="sim-prod-price">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="sim-prod-rupee-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>16,774</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <FooterBar />
    </div>
  );
}
