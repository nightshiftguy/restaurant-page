import pizzaImg from "./img/pizza.png";

export default function loadMenuPage() {
    const container = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id","menu-container");

    const header = document.createElement("h1");
    header.textContent = "Menu";

    const menuImg = document.createElement("img");
    menuImg.setAttribute("id", "menu-image");
    menuImg.src = pizzaImg;

    const tbl = document.createElement("table");

    const tblHead = document.createElement("thead");
    const tblNameH = document.createElement("th");
    tblNameH.textContent = "Name:";
    tblNameH.colSpan = 1;
    const tblPriceH = document.createElement("th");
    tblPriceH.textContent = "Price:";
    tblPriceH.colSpan = 1;
    tblHead.appendChild(tblNameH);
    tblHead.appendChild(tblPriceH);


    const tblBody = document.createElement("tbody");
    let menu = [
        ["Pepperoni", "12,9 $"],
        ["Margarita", "22,5 $"],
        ["Capriciosa", "2 $"]];
    for (let row of menu) {
        const tr = document.createElement("tr");
        for (let item of row) {
            const td = document.createElement("td");
            td.textContent = item;
            tr.appendChild(td);
        }
        tblBody.appendChild(tr);
    }

    tbl.appendChild(tblHead);
    tbl.appendChild(tblBody);

    menuContainer.appendChild(header);
    menuContainer.appendChild(menuImg);
    menuContainer.appendChild(tbl);

    container.appendChild(menuContainer);
}