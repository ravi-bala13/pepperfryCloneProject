import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import FooterBar from "./FooterBar";

export default function Home() {
  //  ------------------------- Slider  -----------------------------
  const slider = [
    "https://ii2.pepperfry.com/media/wysiwyg/banners/promo_2x_221021_es.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/HB01_Web_28102021_2x.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_28102021_2x.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/HB03_Web_28102021_2x.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/HB04_Web_28102021_2x.jpg",
  ];
  const [sliderIndex, setsliderIndex] = useState(0);

  function slideShow() {
    setInterval(function () {
      setsliderIndex((prev) => {
        return (prev + 1) % slider.length;
      });
    }, 3000);
  }

  useEffect(() => {
    slideShow();
  }, []);

  //  ------------------------- #######  -----------------------------

  return (
    <div>
      <Navbar />
      <section id="body">
        <div id="body-one">
          <div id="slider">
            <img src={slider[sliderIndex]} alt="" />
          </div>
          <div id="offers">
            <div>
              <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/28OctWEB_RHS_Deals2X.png" />
            </div>
            <div>
              <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/WEB_Bottom_RHS_ICICI2X-21.png" />
            </div>
          </div>
        </div>
        <div id="body-two">
          <div>
            <h3>BANK OFFERS</h3>
          </div>
          <div id="bank-offers">
            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_No_Cost_EMI16421_2x.png" />
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_IDFC16421_2x.png" />
            <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_AMEX16721_2x.png" />
            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Bank_ICICI_Festive_0122421_2x.png" />
            <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_RBL16421_2x.png" />
            <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_ICICI_Festive_0222421_2x.png" />
          </div>
        </div>

        <div id="body-three">
          <div id="body-three-a">
            <h3>MAKE EVERYONE GO WOW</h3>
            <span>Jaw-Droppingly Gorgeous Collections</span>
            <div id="body-three-b">
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/ca_web_18102021_1.jpg" />
                <h3>KAYLEE</h3>
                <span>Modern Glam</span>
              </div>
              <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/ca_web_18102021_2.jpg" />
                <h3>JULIAN</h3>
                <span>Geometric Wonder</span>
              </div>
              <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/ca_web_18102021_3.jpg" />
                <h3>NUEVO</h3>
                <span>Crafted Cheakerboard Pattern</span>
              </div>
            </div>
          </div>
        </div>

        <div id="body-four">
          <div id="body-four-a">
            <h3>NOT JUST GOOD LOOKS</h3>
            <span>Excellent Quality In-Season Furniture</span>
            <div id="body-four-b">
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_1.jpg" />
                <h3>Luxurious Dining Sets</h3>
                <span>300+ Products | Starting ₹ 12,325</span>
              </div>
              <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_2.jpg" />
                <h3>Sideboards That Blend Seamlessly</h3>
                <span>200+ Products | Starting ₹ 3,699</span>
              </div>
              <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_3.jpg" />
                <h3>Elegant Console Tables</h3>
                <span>130+ Products | Starting ₹ 5,499</span>
              </div>
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_4.jpg" />
                <h3>Comfy Seating Solutions</h3>
                <span>2000+ Products | Starting ₹ 500</span>
              </div>
              <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_5.jpg" />
                <h3>Plush Sofas</h3>
                <span>2000+ Products | Starting ₹ 7,309</span>
              </div>
              <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_6.jpg" />
                <h3>Indian Hand-Painted Furniture</h3>
                <span>20+ Products | Starting ₹ 12,324</span>
              </div>
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_7.jpg" />
                <h3>Head-Turning Bar Furniture</h3>
                <span>300+ Products | Starting ₹ 1,700</span>
              </div>
              <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_8.jpg" />
                <h3>Marble & Metal Medley</h3>
                <span>30+ Products | Starting ₹ 5499</span>
              </div>
            </div>
          </div>
        </div>

        <div id="body-three">
          <div id="body-three-a">
            <h3>PARTY HARD. SLEEP HARDER.</h3>
            <span>Mattresses From Top Brands</span>
            <div id="body-three-b" className="body-three-bc">
              <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/tm_web_03082021_1.jpg" />
                <h3>Memory Foam</h3>
                <span>400+ Products | Starting ₹ 4,581</span>
              </div>
              <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/tm_web_04102021_2.jpg" />
                <h3>#GreatestMattressEver</h3>
                <span>40+ Products | Starting ₹ 5,279</span>
              </div>
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/tm_web_04102021_3.jpg" />
                <h3>Sofa Cum Foldable Mattress</h3>
                <span>150+ Products | Starting ₹ 3,599</span>
              </div>
              <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/tm_web_03082021_4.jpg" />
                <h3>100 Nights Trial</h3>
                <span>300+ Products | Starting ₹ 4,399</span>
              </div>
            </div>
          </div>
        </div>

        <div id="body-four">
          <div id="body-four-a">
            <h3>DIWALI IS INCOMPLETE WITHOUT KAJU KATLI</h3>
            <span>And These Home Accessories</span>
            <div id="body-four-b">
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/tf_web_18102021_1.jpg" />
                <h3>Energy-Efficient Lights</h3>
                <span>438+ Products | Starting ₹ 339</span>
              </div>
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_18102021_2.jpg" />
                <h3>Ultra Soft Bedding</h3>
                <span>4000+ Products | Starting ₹ 249</span>
              </div>
              <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/td_web_18102021_3_.jpg" />
                <h3>Striking Serveware</h3>
                <span>800+ Products | Starting ₹ 729</span>
              </div>
              <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/td_web_18102021_4.jpg" />
                <h3>Statement Wall Art</h3>
                <span>4000+ Products | Starting ₹ 250</span>
              </div>
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_18102021_5.jpg" />
                <h3>Velvety Carpets</h3>
                <span>2000+ Products | Starting ₹ 249</span>
              </div>
              <div>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/td_web_18102021_6.jpg" />
                <h3>Traditional Chowkies</h3>
                <span>80+ Products | Starting ₹ 259</span>
              </div>
              <div>
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/td_web_18102021_7.jpg" />
                <h3>Diwali Lights</h3>
                <span>643+ Products | Starting ₹ 79</span>
              </div>
              <div>
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/td_web_18102021_8.jpg" />
                <h3>Sophisticated Floor Lamps</h3>
                <span>898+ Products | Starting ₹ 1,298</span>
              </div>
            </div>
          </div>
          <div id="body-three">
            <div id="body-three-a">
              <h3>STYLE CHEAT SHEET</h3>
              <span>Shop Your Aesthetic</span>
              <div id="body-three-b">
                <div>
                  <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Contemporary_27082019.jpg" />
                </div>
                <div>
                  <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/modern_27082019.jpg" />
                </div>
                <div>
                  <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/midcentury_27082019.jpg" />
                </div>
                <div>
                  <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/industrial_27082019.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div id="body-three">
            <div id="body-three-a">
              <h3>BOTHER US ALL YOU WANT!</h3>
              <span>We Get A Thrill From Helping People</span>
              <div id="body-three-b">
                <div>
                  <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp-consulting-sol-find-a-studio-img-18082020.jpg" />
                  {/* <h3 style="margin-top: 10px;">BUY ON PHONE</h3> */}
                  <h3 style={{ marginTop: "10px" }}>BUY ON PHONE</h3>
                  <span>Talk To Our Experts for a Free Consultation</span>
                </div>
                <div>
                  <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-consulting-sol-by-on-phone-img-18082020.jpg" />
                  <h3 style={{ marginTop: "10px" }}>JULIAN</h3>
                  <span>Geometric Wonder</span>
                </div>
                <div>
                  <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp-consulting-sol-modular-solutions-img-18082020.jpg" />
                  <h3 style={{ marginTop: "10px" }}>MODULAR FURNITURE</h3>
                  <span>Get Customized Modular Kitchens and Wardrobe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterBar />
    </div>
  );
}
