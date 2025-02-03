import locationImgSrc from "./img/location.jpg"

export default function loadLocationPage(){
    const container = document.querySelector("#content");

    const location = document.createElement("div");

    const locationL = document.createElement("div");
    const locationImg = document.createElement("img");
    locationImg.src = locationImgSrc;
    locationL.appendChild(locationImg);

    const locationR = document.createElement("div");
    const header = document.createElement("h2");
    const text = document.createElement("p");
    header.textContent = "Location"
    text.textContent = "Address: Warsaw, Big street 12";
    locationR.appendChild(header);
    locationR.appendChild(text);

    container.appendChild(locationL); 
    container.appendChild(locationR);
}