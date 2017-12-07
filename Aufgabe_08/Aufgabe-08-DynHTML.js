window.addEventListener("load", DynHTML);
function DynHTML() {
    var anzahl = prompt("Anzahl");
    var anzahlNumb = parseInt(anzahl);
    var width = prompt("Breite");
    var widthNumb = parseInt(width);
    var height = prompt("Höhe");
    var heightNumb = parseInt(height);
    if (anzahlNumb >= 1 && anzahlNumb <= 100) {
        for (var i = 0; i < anzahlNumb; i++) {
            drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", widthNumb, heightNumb);
        }
    }
    else {
        window.alert("Die Zahl muss zwischen 1 und 100 liegen");
        DynHTML();
    }
}
function drawRect(_x, _y, _color, _width, _height) {
    let div = document.createElement("div");
    div.style.width = _width.toString();
    div.style.height = _height.toString();
    div.style.marginLeft = _x.toString();
    div.style.marginTop = _y.toString();
    div.style.backgroundColor = _color;
    document.body.appendChild(div);
}
//# sourceMappingURL=Aufgabe-08-DynHTML.js.map