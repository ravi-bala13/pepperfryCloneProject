import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FooterBar from "./FooterBar";
import "./Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProductsFromBackend = async () => {
    try {
      let url = "http://localhost:8080/products";
      let result = await fetch(url);
      console.log("result:", result);
      let data = await result.json();
      console.log("data:", data);
      if (data.length) {
        setProducts(data);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getProductsFromBackend();
  }, []);

  const handleCardClick = (productId) => {
    window.location.href = `/productInfo?${productId}`;
  };
  return (
    <div>
      <Navbar />

      <div className="main">
        <div className="nav">
          <div id="head">
            <div id="head-clip">
              <h4>ALL SOFAS</h4>
            </div>
          </div>
          <div id="head-categ">
            <div id="head-cate-flex">
              <div>
                <div className="head-cate-card">
                  <div>
                    <div>
                      <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_1_Seater_Sofas_27.jpg" />
                    </div>
                  </div>
                  <div>
                    <h5>1 Seater Sofas</h5>
                  </div>
                  <div>
                    <h5>709 Options</h5>
                  </div>
                </div>
                <div className="head-cate-card">
                  <div>
                    <div>
                      <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_2_Seater_Sofas_27.jpg" />
                    </div>
                  </div>
                  <div>
                    <h5>2 Seater Sofas</h5>
                  </div>
                  <div>
                    <h5>757 Options</h5>
                  </div>
                </div>
                <div className="head-cate-card">
                  <div>
                    <div>
                      <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_3_Seater_Sofas_27.jpg" />
                    </div>
                  </div>
                  <div>
                    <h5>3 Seater Sofas</h5>
                  </div>
                  <div>
                    <h5>897 Options</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dash">
          <div className="blank"></div>
          <div className="outer-spaced">
            <div className="sort-div"></div>
          </div>
          <div className="outer-spaced">
            <div></div>
            <div className="main-dash-content-filter">
              <div>
                <div>
                  <span>Home</span>
                  <br />
                  <span> Furniture</span>
                  <br />
                  <span> Sofas & Loungers</span>
                  <br />
                  <span> Sofas</span>
                  <br />
                </div>
                <div>
                  <h2>APPLY FILTER</h2>
                </div>
                <div>
                  <h4>PEPPERFRY BRANDS</h4>
                  <br />
                  <input type="checkbox" onClick="sortLH()" />
                  <span>No</span>
                  <span>(1298)</span>
                  <br />
                  <input type="checkbox" onClick="sortHL()" />
                  <span>Yes</span>
                  <span>(1058)</span>
                  <br />
                </div>
                <div></div>
                <div className="flex-input">
                  <h4>BRAND</h4>
                  <div>
                    <input type="checkbox" onClick="sortBrand()" />
                    <span>CasaCraft</span>
                    <span>(586)</span>
                    <br />
                    <input type="checkbox" onClick="sortBrand1()" />
                    <span>Woodsworth</span>
                    <span>(268)</span>
                    <br />
                    <input type="checkbox" onClick="sortBrand2()" />
                    <span>Durian</span>
                    <span>(183)</span>
                    <br />
                    <input type="checkbox" onClick="sortBrand3()" />
                    <span>Furnitech</span>
                    <span>(126)</span>
                    <br />
                    <input type="checkbox" onClick="sortBrand4()" />
                    <span>Urban Living</span>
                    <span>(102)</span>
                    <br />
                  </div>
                </div>
                <div className="flex-input">
                  <h4>PRICE</h4>
                  <div>
                    <input type="checkbox" onClick="sortPrice20()" />
                    <span>Under ₹ 20,000</span>
                    <span>(204)</span>
                    <br />
                    <input type="checkbox" onClick="sortPrice40()" />
                    <span>₹ 20,000 to ₹ 40,000</span>
                    <span>(783)</span>
                    <br />
                    <input type="checkbox" onClick="sortPrice60()" />
                    <span>Over ₹ 40,000</span>
                    <span>(278)</span>
                    <br />
                  </div>
                </div>
                <div className="flex-input">
                  <h4>PRIMARY MATERIAL</h4>
                  <div>
                    <input type="checkbox" />
                    <span>Fabric</span>
                    <span>(586)</span>
                    <br />
                    <input type="checkbox" />
                    <span>Leatherette</span>
                    <span>(268)</span>
                    <br />
                    <input type="checkbox" />
                    <span>Velvet Fabric</span>
                    <span>(183)</span>
                    <br />
                    <input type="checkbox" />
                    <span>Sheesham Wood</span>
                    <span>(126)</span>
                    <br />
                    <input type="checkbox" />
                    <span>Polyester</span>
                    <span>(102)</span>
                    <br />
                  </div>
                </div>
                <div className="flex-input">
                  <h4>CLEARANCE SALE</h4>
                  <div>
                    <input type="checkbox" />
                    <span>Yes</span>
                    <span>(71)</span>
                    <br />
                    <input type="checkbox" />
                    <span>No</span>
                    <span>(39)</span>
                    <br />
                  </div>
                </div>
                <div className="flex-input">
                  <h4>DISCOUNT</h4>
                  <div>
                    <input type="checkbox" />
                    <span>10% and Above</span>
                    <span>(1258)</span>
                    <br />
                    <input type="checkbox" />
                    <span>20% and Above</span>
                    <span>(1169)</span>
                    <br />
                    <input type="checkbox" />
                    <span>30% and Above</span>
                    <span>(966)</span>
                    <br />
                    <input type="checkbox" />
                    <span>40% and Above</span>
                    <span>(700)</span>
                    <br />
                    <input type="checkbox" />
                    <span>50% and Above</span>
                    <span>(100)</span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-dash-content-card">
              <div>
                <div id="main-card">
                  {products.map((el, i) => (
                    <div onClick={() => handleCardClick(el._id)} key={el._id}>
                      <div>
                        <img src={el.img} alt="Product Image" />
                      </div>
                      <div>
                        <span>
                          <br />
                          <b>{el.name}</b>
                        </span>
                      </div>
                      <div>
                        <span>{el.brand}</span>
                        <a>
                          <img
                            src="https://ii1.pepperfry.com/images/svg/header-wishlist-icon-2021.svg"
                            alt="Like"
                          />
                        </a>
                      </div>

                      <div>
                        <div>
                          <br />
                          <b>₹ {el.price}</b> <span>₹ {el.cutPrice}</span>
                        </div>
                      </div>
                      <div>
                        <div>
                          Save ₹ {el.cutPrice - el.price}{" "}
                          <a>
                            (
                            {Math.round(
                              ((el.cutPrice - el.price) / el.cutPrice) * 100
                            )}
                            % Off)
                          </a>
                          , Limited Time Offer
                        </div>
                      </div>
                      <div>
                        <div>
                          <br />
                          <img
                            src="https://ii1.pepperfry.com/images/svg/clip-exp-ship-icon-2018.svg"
                            alt="Ship Icon"
                          />{" "}
                          Ships In 1 Day
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content"></div>
      </div>

      <div className="clip-lstbtm-cnt">
        <div className="container">
          <div className="row">
            <div className="pf-col sm-12 pf-padding-40">
              <div className="cnt-repeat">
                <h1 className="description-title">
                  Buy Wooden Furniture Online
                </h1>
                <p>
                  {" "}
                  Buy furniture online @ Pepperfry - India's largest home
                  shopping destination offering a wide range of home and office
                  furniture online. Choosing the right furniture for your home
                  online will add elegance and functionality to your interior
                  decor, while it will also be cost effective and long lasting
                  at the same time. Enjoy fast shipping as well as cash on
                  delivery at our online store.
                </p>
                <h2>Things to Consider Before Buying Furniture</h2>
                <p>
                  There are so many furniture designs available nowadays.
                  Looking at these, you may end up in a confusion of which one
                  to buy. However, you must understand your requirements before
                  purchasing the furniture. Here is a list of common factors
                  that can help you understand your needs better:
                </p>
                <ul className="ul-list">
                  <li>Size of the area where the furniture will be placed</li>
                  <li>Size of the furniture</li>
                  <li>
                    Purpose of the furniture, whether bed, sofa, or cabinet
                  </li>
                  <li>Features of the furniture</li>
                  <li>Its material, design, and color</li>
                  <li>Your budget</li>
                </ul>
                <p>
                  Who said furniture should only fulfill its purpose? You can go
                  a mile extra with your creativity skills by mixing and
                  matching different furniture designs to beautify your home
                  dcor. For example, you can set up quirky benches as a seating
                  arrangement instead of sofas in the living area and amp up the
                  liveliness of your home. Similarly, your bedroom furniture
                  design reflects your personality, so it is all in the way you
                  style it, then be it a modular wardrobe or a loft bed with
                  storage and desk functionality.
                </p>
                <h2 className="description-title">
                  Exclusive Range of Furniture Online
                </h2>
                <p>
                  Pepperfry.com is the best place to buy metal as well as wooden
                  furniture online in India. Here at Pepperfry, we are committed
                  to offering our customers the widest range in&nbsp;home
                  furniture&nbsp;like{" "}
                  <a
                    href="https://www.pepperfry.com/furniture-tables.html"
                    title="Tables"
                  >
                    tables
                  </a>
                  ,{" "}
                  <a href="#" title="Buy Sofas">
                    sofas
                  </a>
                  , chairs for living room as well as&nbsp;
                  <a href="#" title="Shop for Beds">
                    beds
                  </a>
                  ,
                  <a hre="#" title="Sofa Set">
                    sofa set
                  </a>
                  , wardrobes, side tables, dressing tables for bedroom and
                  crockery cabinets, chest of drawers for kitchen especially in
                  solid wood and sheesham{" "}
                  <a href="#" title="furniture designs">
                    furniture designs
                  </a>
                  , so that it is easy and hassle free to&nbsp;buy furniture
                  online. Our furniture is intelligently designed to give both
                  comfort and functionality; while we also go to great lengths
                  to ensure that we source only the highest quality raw
                  materials and use the latest technologies to manufacture each
                  individual piece.
                </p>
                <h2 className="description-title">
                  Wooden Furniture in Solid Wood &amp; Sheesham Designs
                </h2>
                <p>
                  Our exhaustive range offers multiple options in solid, mango,
                  teak, rubber, acacia, ply, engineered and sheesham wood
                  furniture pieces, while all our wooden furniture can also be
                  customized to suit the individual needs of our customers. We
                  also offer solid wood furniture in beds, dining tables,{" "}
                  <a href="#" title="Shoe Racks">
                    shoe racks
                  </a>
                  , storage and reception cabinets at our online marketplace.
                  See various
                  <a href="#" title="Sofa Designs">
                    sofa designs
                  </a>
                  <a>
                    {" "}
                    side by side, compare prices and finishes and find exclusive
                    modular furniture pieces that you would not find at local
                    furniture stores.
                  </a>
                </p>
                <h2>
                  <a>Browse Furniture by Room Type - </a>
                </h2>
                <p>
                  <a href="#" title="Living Room Furniture">
                    Living Room Furniture
                  </a>{" "}
                  Living room consists of your stylish and trending sofas,
                  chairs and tables. They should be exquisitely designed and
                  comfortable to sit on. These furniture pieces escalate the
                  aesthetic appeal of your home.
                </p>
                <p>
                  <a href="#" title="Dining Room Furniture">
                    Dining Room Furniture
                  </a>{" "}
                  Apart from looking good, dining room furniture should also be
                  efficient and robust, these include tables, chairs and
                  cabinets. Always remember to emphasize on quality over
                  quantity when it comes to dining room furniture.
                </p>
                <p>
                  <a href="#" title="Study Room Furniture">
                    Study Room Furniture
                  </a>{" "}
                  A place to study and indulge in your passion for books. Study
                  room consists of shelves, cases, cabinets and tables. They
                  should be brilliantly designed and efficient to utilize.
                </p>
                <p>
                  <a href="#" title="Bedroom Furniture">
                    Bedroom Furniture
                  </a>{" "}
                  A room where you retire for the day should always be cozy and
                  comfy. Bed room furniture include bedside tables, mattresses,
                  dressing tables, beds and wardrobes. Its a combination of
                  storage furniture pieces and bedroom essentials, ensure you
                  get the best ones.{" "}
                </p>
                <p>
                  <a href="#" title="Kids Room Furniture">
                    Kids Room Furniture
                  </a>{" "}
                  A kids room requires colorful, safe and robust furniture
                  pieces. Kids room consists of beds, bedside and study tables,
                  cradles, sofas and book shelves. Do not compromise on quality
                  while grabbing furniture for your kids room.{" "}
                </p>
                <p>
                  <a href="#" title="Outdoor Furniture">
                    Outdoor Furniture
                  </a>{" "}
                  Needless to say these furniture pieces do not have the comfort
                  of being installed inside of your home, so they have to be
                  sturdy and robust to handle the changing weather conditions.
                  Outdoor furniture consist of chairs, swings, loungers, dining
                  sets and tables. Grab these manufactured by reputed brands.
                </p>
                <p>
                  You can also avail discounts &amp; offers on wide range of
                  Decor, Modular Kitchen, Carpets, Mattress, Kitchenware and
                  Home Utilities products, that suit your need. So go ahead now
                  and take a good look at our{" "}
                  <b>online furniture shopping store</b>.
                </p>
                <h2 className="description-title">
                  Frequently Asked Questions
                </h2>
                <h2 className="description-title">
                  What is the most popular furniture style?
                </h2>
                <p>
                  The most popular furniture styles include rustic farmhouse,
                  modern, glam, and traditional. The chances of these furniture
                  styles going out of trend are minimal.
                </p>
                <h2 className="description-title">
                  What are the latest trends in furniture?
                </h2>
                <p>
                  The latest trends in furniture include bamboo furniture,
                  denim, jungle prints and neutral palette upholstered
                  furniture, multi-functional furniture, unique metal furniture,
                  and artisan-inspired furniture.
                </p>
                <h2 className="description-title">
                  What wood is best for furniture?
                </h2>
                <p>
                  Hardwoods such as maple, oak, teak, mahogany, walnut, ash,
                  acacia are some of the most commonly used wood types that are
                  best for furniture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}
