var name = prompt("Julian");
function init() {
    let node = document.getElementById("Inhalt");
    if (name.length < 1) {
        node.innerHTML = "Gib gefälligst deinen Namen ein!";
    }
    if (name.length >= 1) {
        node.innerHTML = "Klasse" + "Julian";
    }
}
window.addEventListener("load", init);
