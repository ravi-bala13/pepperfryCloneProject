import React from "react";

export default function LoginModel({ setsigninModel, setLoginModel }) {
  return (
    <div id="login-modal">
      <div id="login-modal-text">
        <span>Log In</span>
        <p>You Will Be Able To Track Your Order, Use Wishlist & More.</p>
      </div>
      <span id="close1" onClick={() => setLoginModel(false)}>
        X
      </span>
      <div className="loginPage">
        <div className="left_one">
          <img
            src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg"
            alt=""
          />
        </div>
        <div className="right_one">
          <div className="right_one_Up">
            <div className="right_one_Inner">
              <form id="myform1">
                <div className="block">
                  <div className="names">
                    <label htmlFor="mail"></label>
                    <input
                      type="text"
                      className="input"
                      id="mail1"
                      placeholder="Email"
                      name="mail"
                      required
                    />
                  </div>
                </div>
                <div className="block">
                  <div className="names">
                    <label htmlFor="psw"></label>
                    <input
                      type="password"
                      className="input"
                      id="psw1"
                      placeholder="Password"
                      name="psw"
                      required
                    />
                  </div>
                </div>
              </form>
              <button id="login">LOG IN</button>
              <a
                href="#"
                style={{
                  color: "#f16521",
                  fontSize: "12px",
                  fontWeight: "300",
                  fontFamily: "'Fira Sans',sans-serif",
                }}
              >
                Forgot Password
              </a>
            </div>
          </div>
          <div className="right_one_down">
            <div className="right_one_down-1">
              <a
                className="link"
                href="#"
                style={{
                  color: "#f16521",
                  fontFamily: "'Fira Sans',sans-serif",
                }}
                id="go-to-register"
                onClick={() => {
                  setLoginModel(false);
                  setsigninModel(true);
                }}
              >
                New to Pepperfry? Register Here
              </a>
            </div>
            <div className="right_one_down-2">
              <span className="media">OR Continue with</span>
              <a className="media-image" href="#">
                <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" />
              </a>
              <a className="media-image" href="#">
                <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
