var name = prompt("Bitte gib deinen Namen ein");
function init() {
    let node = document.getElementById("Inhalt");
    if (name.length < 1) {
        node.innerHTML = "Gib gefälligst deinen Namen ein!";
    }
    if (name.length >= 1) {
        node.innerHTML = "Servus" + " " + name;
    }
}
window.addEventListener("load", init);
//# sourceMappingURL=Aufgabe-0-Mini Seite.js.map