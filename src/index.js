import "./styles.css";
import loadHomePage from "./homepage.js";
import loadMenuPage from "./menupage.js";
import loadAboutPage from "./aboutpage.js";
import loadLocationPage from "./locationpage.js";

loadHomePage();

function cleanContainer(){
    const container = document.querySelector("#content");
    container.textContent=""
}

document.querySelector("#home").addEventListener("click",()=>{cleanContainer(); loadHomePage();});
document.querySelector("#menu").addEventListener("click",()=>{cleanContainer(); loadMenuPage();});
document.querySelector("#about").addEventListener("click",()=>{cleanContainer(); loadAboutPage();});
document.querySelector("#location").addEventListener("click",()=>{cleanContainer(); loadLocationPage();});