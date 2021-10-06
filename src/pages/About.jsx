import React from "react";
import Aboutbar from "../components/Aboutbar";
import "../styles/landing.scss";

export default function About() {
    return (
        <>
            <Aboutbar />
           
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
