import React, { useState } from "react";

export default function SigninModel({ setsigninModel, setLoginModel }) {
  const [userDetails, setUserDetails] = useState({
    uname: "",
    umail: "",
    unumber: "",
    upassword: "",
  });

  const backendUrl = "https://pepperfryclonebackend.onrender.com";
  // const backendUrl = "http://localhost:8080";

  const signinSubmit = async () => {
    try {
      let url = `${backendUrl}/users/signup`;
      let result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });
      let data = await result.json();
      if (data.message) {
        alert(data.message);
        setsigninModel(false);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

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
                      value={userDetails.uname}
                      onChange={handleChange}
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
                      name="unumber"
                      value={userDetails.unumber}
                      onChange={handleChange}
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
                      name="umail"
                      value={useState.umail}
                      onChange={handleChange}
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
                      name="upassword"
                      value={userDetails.upassword}
                      onChange={handleChange}
                      required
                    />
                    <p id="alert3"></p>
                  </div>
                </div>
              </form>
              <button id="register" onClick={signinSubmit}>
                REGISTER
              </button>
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
