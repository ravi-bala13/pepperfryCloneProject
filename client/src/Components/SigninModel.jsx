import React from "react";

export default function SigninModel({ setsigninModel, setLoginModel }) {
  return (
    <div id="signin-modal">
      <span
        id="close"
        onClick={() => {
          setsigninModel(false);
        }}
      >
        X
      </span>
      <div className="mainPage">
        <div className="left">
          <img
            id="sigin_left_img"
            src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_12Oct.jpg"
            alt=""
          />
        </div>
        <div className="right">
          <div className="rightUp">
            <div className="rightInner">
              <form id="myform">
                <div className="container">
                  <div className="name">
                    <label htmlFor="username"></label>
                    <input
                      type="text"
                      className="Input"
                      id="UnName"
                      placeholder="Name"
                      name="uname"
                      required
                    />
                    <p id="alert1"></p>
                  </div>
                </div>
                <div className="container">
                  <div className="name">
                    <label htmlFor="num"></label>
                    <input
                      type="tel"
                      className="Input"
                      id="UserNum"
                      placeholder="Mobile number"
                      name="num"
                      required
                    />
                    <p id="alert"></p>
                  </div>
                </div>
                <div className="container">
                  <div className="name">
                    <label htmlFor="mail"></label>
                    <input
                      type="text"
                      className="Input"
                      id="mail"
                      placeholder="Email"
                      name="mail"
                      required
                    />
                    <p id="alert2"></p>
                  </div>
                </div>
                <div className="container">
                  <div className="name">
                    <label htmlFor="psswrd"></label>
                    <input
                      type="password"
                      className="Input"
                      id="psswrd"
                      placeholder="Password"
                      name="psw"
                      required
                    />
                    <p id="alert3"></p>
                  </div>
                </div>
              </form>
              <button id="register">REGISTER</button>
              <span className="login_span">
                By registering you agree to our{" "}
                <a className="termconditions" href="#">
                  Terms & Conditions
                </a>
              </span>
            </div>
          </div>
          <div className="rightdown">
            <div className="rightdown-1">
              <a
                className="link"
                href="#"
                id="go_to_login"
                onClick={() => {
                  setLoginModel(true);
                  setsigninModel(false);
                }}
              >
                Existing User? Log In
              </a>
            </div>
            <div className=" rightdown-2 ">
              <span className="social ">OR Continue with</span>
              <a className="social-image " href="#">
                <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png " />
              </a>
              <a className="social-image " href="#">
                <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
