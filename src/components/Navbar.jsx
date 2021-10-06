import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
     return (
          <div className="navbar-container">
               <Link to="/">
                    <div className="logo"></div>
               </Link>
                    <div className="nav-text">What is BetRelate? </div>
                    {/* <a href="https://www.instagram.com/mollo.finance">
                         <div className="icon instagram" />
                    </a>
                    <a href="https://facebook.com/mollo.finance">
                         <div className="icon facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/getmollo">
                         <i className="icon fab fa-linkedin" />
                    </a>
                    <a href="https://twitter.com/GetMollo">
                         <div className="icon twitter" />
                    </a> */}
               
          </div>
     );
}
