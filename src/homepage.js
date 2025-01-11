import restaurantImg from "./img/restaurant.jpg";

export default function loadHomePage(){
    const container = document.querySelector("#content");

    const mainImage = document.createElement("img");
    mainImage.setAttribute("id", "main-image");
    mainImage.src = restaurantImg;

    const header = document.createElement("h1");
    header.textContent = "Super restaurant";

    const shortText = document.createElement("p");
    shortText.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit voluptas, natus, voluptatibus eius nam at vero voluptate maxime beatae est! Sunt pariatur doloribus, maxime distinctio iste eum nobis rem?";
    
    container.appendChild(mainImage);
    container.appendChild(header);
    container.appendChild(shortText);
}