export default function loadAboutPage(){
    const container = document.querySelector("#content");
    const text = document.createElement("p");
    text.textContent = "about page";
    container.appendChild(text);
}