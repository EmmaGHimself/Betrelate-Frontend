import React from "react";
import Navbar from "../components/Navbar";

export default function ThankYou() {
     return (
          <div className="thank-you-page">
               <Navbar />
               <div className="thank-you-image"></div>
               <div className="header-text">Congratulation, You are In</div>
               <div className="text">Congratulations! you are on the waiting list and will be notified about the product availability once we launch. Want to be notified early? jump the queue by sharing your unique link with family and friends.</div>
               <div className="referal-container">
                    <span>https://betrelate.com/2wXuy7</span>
                    <div
                         className="btn"
                         onClick={() => {
                              navigator.clipboard.writeText("https://betrelate.com/2wXuy7");
                              alert("Link Copied To Clipboard");
                         }}
                    >
                         Copy
                    </div>
               </div>
               <div className="sub-text">Visit our social platforms</div>
               <div className="socials-container">
                              <a href="#">
                                   <div className="icon twitter" />
                              </a>
                              <a href="#">
                                   <div className="icon facebook" />
                              </a>
                              <a href="#">
                                   <div className="icon linkedin" />
                              </a>
                              <a href="#">
                                   <div className="icon youtube" />
                              </a>
                              <a href="#">
                                   <div className="icon instagram" />
                              </a>
                         
                         </div>
               
          </div>
     );
}
