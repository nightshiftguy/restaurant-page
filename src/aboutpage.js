import historyImgSrc from "./img/restaurantOld.jpg";
import founderImgSrc from "./img/founder.jpg";

export default function loadAboutPage(){
    const container = document.querySelector("#content");

    const history = document.createElement("div");
    history.setAttribute("class","image-with-text-container");

    const historyL = document.createElement("div");
    const historyHeader = document.createElement("h2");
    const historyText = document.createElement("p");
    historyHeader.textContent="History:";
    historyText.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit voluptas, natus, voluptatibus eius nam at vero voluptate maxime beatae est! Sunt pariatur doloribus, maxime distinctio iste eum nobis rem?";
    historyL.appendChild(historyHeader);
    historyL.appendChild(historyText);

    const historyR = document.createElement("div");
    const historyImg = document.createElement("img");
    historyImg.src = historyImgSrc;
    historyR.appendChild(historyImg);

    history.appendChild(historyL);
    history.appendChild(historyR);
    

    const founder = document.createElement("div");
    founder.setAttribute("class","image-with-text-container");

    const founderL = document.createElement("div");
    const founderImg = document.createElement("img");
    founderImg.src = founderImgSrc;
    founderL.appendChild(founderImg);

    const founderR = document.createElement("div");
    const founderHeader = document.createElement("h2");
    const founderText = document.createElement("p");
    founderHeader.textContent="Founder:";
    founderText.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit voluptas, natus, voluptatibus eius nam at vero voluptate maxime beatae est! Sunt pariatur doloribus, maxime distinctio iste eum nobis rem?";
    founderR.appendChild(founderHeader);
    founderR.appendChild(founderText);

    founder.appendChild(founderL);
    founder.appendChild(founderR);

    container.appendChild(history);
    container.appendChild(founder);
}