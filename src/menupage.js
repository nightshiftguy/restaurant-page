export default function loadMenuPage(){
    const container = document.querySelector("#content")
    const text = document.createElement("p");
    text.textContent="menupage";
    container.appendChild(text);
}