import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/landing.scss";

export default function Landing() {
     const [inputValue, setInputValue] = useState("");

     // const submitForm = (e) => {
     //   e.preventDefault();
     //   let url =
     //     "https://getmollo.us1.list-manage.com/subscribe/post?u=2c175cae252d22c58fa9b5e2c&amp;id=0582b30931";
     //   fetch(url, {
     //     method: "POST",
     //     headers: {
     //       "Content-type": "application/json; charset=UTF-8",
     //       "access-control-allow-origin" : "*",
     //       "access-control-allow-headers": "content-type"
     //     },
     //     mode: "cors",
     //     body: JSON.stringify({
     //       email: inputValue.toString(),
     //     }),
     //   })
     //     .then((data) => console.log(data))
     // };

     return (
          <>
               <Navbar />
               <div className="header-container">
                    <div className="left-side">
                         <div className="header-heading">Welcome to BetRelate </div>

                         <div className="header-text">Join our waiting list of players with passion</div>

                         <form
                              method="post"
                              action="/thank-you"
                              id="subscriberForm"
                         // onSubmit={submitForm}
                         >

                              <div className="cta-container">
                                   <label>Full Name</label>
                                   <input type="name" id="inputID" name="NAME" placeholder="eg. John Doe" />
                                   {/* <input type="submit" id="formSubmit" value="Get Early Access" /> */}
                              </div>

                              <div className="cta-container">
                                   <label>Email</label>
                                   <input type="email" name="EMAIL" placeholder="eg. johndoe@example.com" />
                                   {/* <input type="submit" id="formSubmit" value="Get Early Access" /> */}
                              </div>

                              <div className="cta-container">
                                   <label>Phone Number</label>
                                   <input type="phone" name="PHONENUMBER" placeholder="eg. 10827994090" />
                                   {/* <input type="submit" id="formSubmit" value="Get Early Access" /> */}
                              </div>

                              <div className="cta-container">
                                   <input type="submit" id="formSubmit" value="Join Now" />
                              </div>
                         </form>

                         <div className="sub-text"> <div>Learn More</div>
                              <div className="subtitle-text">Visit our social platforms</div>
                              <div className="socials-container">
                              <a href="https://twitter.com/GetMollo">
                                   <div className="icon twitter" />
                              </a>
                              <a href="https://facebook.com/mollo.finance">
                                   <div className="icon facebook" />
                              </a>
                              <a href="https://www.linkedin.com/company/getmollo">
                                   <div className="icon linkedin" />
                              </a>
                              <a href="https://www.linkedin.com/company/getmollo">
                                   <div className="icon youtube" />
                              </a>
                              <a href="https://www.instagram.com/mollo.finance">
                                   <div className="icon instagram" />
                              </a>
                         
                         </div>
                              </div>


                    </div>

                    <div className="right-side"></div>
               </div>
          </>
     );
}

window.addEventListener("scroll", () => {
     var offset = window.pageYOffset;
     if (offset > 1) {
          window.document.querySelector(".navbar-container").classList.add("scroll");
     } else if (offset < 1) {
          window.document.querySelector(".navbar-container").classList.remove("scroll");
     }
});
