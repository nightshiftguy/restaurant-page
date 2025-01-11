export default function loadLocationPage(){
    const container = document.querySelector("#content");
    const text = document.createElement("p");
    text.textContent = "location page";
    container.appendChild(text);
}