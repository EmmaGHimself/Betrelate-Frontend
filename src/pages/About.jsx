import React from "react";
import Aboutbar from "../components/Aboutbar";
import "../styles/landing.scss";

export default function About() {
    return (
        <>
            <Aboutbar />
            <div className="header-container">
                <div className="about-left-side"></div>

                <div className="about-right-side">
                    <div className="header-heading">What is BetRelate?</div>

                    <div className="text">
                        <p>Betrelate is a social networking platform where lotto and sports betting players come together to discuss about betting predictions, results, sports news, view lottery results, share betslip and challenge predictions.</p>
                        <p style={{ marginTop: 20 }}>Soon you will be able to:</p>
                    </div>

                    <div className="text" style={{ marginTop: 10 }}>
                        <ul className="dashed">
                            <li>Post what game is on your mind.</li>
                            <li>Share sports betting slips</li>
                            <li>Follow tipsters/forecasters you like</li>
                            <li>Join/create groups of like-minded people</li>
                            <li>Share lottery predictions or view lottery results.</li>
                            <li>Download eBooks or software’s that can help be a better player</li>
                            <li>Give tips or get tipped for your ideas or predictions</li>
                            <li>Create or join pages</li>
                            <li>Create or read useful articles</li>
                            <li>And many more..</li>
                        </ul>


                        <p style={{ marginTop: 25 }}>Be among one of the first 1,000 early access. </p>

                        <div className="btn">
                            <a href="/">Join The Waiting List</a>
                        </div>
                    </div>



                </div>

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
