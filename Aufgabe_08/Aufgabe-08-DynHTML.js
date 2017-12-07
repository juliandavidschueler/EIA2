//window.addEventListener("load", DynHTML);
//
//function DynHTML(): void {
//    
//    var anzahl: string = prompt("Anzahl");
//    var anzahlNumb: number = parseInt(anzahl); 
//
//    var width: string = prompt("Breite");
//    var widthNumb: number = parseInt(width); 
//
//    var height: string = prompt("Höhe");
//    var heightNumb: number = parseInt(height); 
//
//    if (anzahlNumb >= 1 && anzahlNumb <= 100) { 
//        for (var i: number = 0; i < anzahlNumb; i++) {
//            drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", widthNumb, heightNumb); 
//        }
//    } else {
//        window.alert("Die Zahl muss zwischen 1 und 100 liegen"); 
//        DynHTML();
//
//    }
//}
//
//function drawRect(_x: number, _y: number, _color: string, _width: number, _height: number): void {
//
//    let div: HTMLDivElement = document.createElement("div");
//    div.style.width = _width.toString();
//    div.style.height = _height.toString();
//    div.style.marginLeft = _x.toString();
//    div.style.marginTop = _y.toString();
//    div.style.backgroundColor = _color;
//    document.body.appendChild(div); 
//}
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    //    window.addEventListener("keydown", keypress);
    //    function keypress(_event: KeyboardEvent): void {
    //        console.log(_event.keyCode);
    //    }
    function init() {
        var anzahl = prompt("Eingabe der gewünschten Anzahl");
        var anzahlNumb = parseInt(anzahl); //String in Number umwandeln
        var width = prompt("Width in px");
        var widthNumb = parseInt(width); //String in Number umwandeln
        var height = prompt("Height in px");
        var heightNumb = parseInt(height); //String in Number umwandeln
        if (anzahlNumb >= 10 && anzahlNumb <= 100) {
            for (var i = 0; i < anzahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", widthNumb, heightNumb); //x,y und farbe an die Zeichenfunktion �bergeben
            }
        }
        else {
            window.alert("Die Zahl muss zwischen 10 und 100 liegen"); //Warnung bei falscher Eingabe und neu laden der Funktion
            init();
        }
    }
    function drawRect(_x, _y, _color, _width, _height) {
        let div = document.createElement("div"); //div erstellen
        div.style.width = _width.toString();
        div.style.height = _height.toString();
        div.style.marginLeft = _x.toString(); //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color; //Zufallsfarbe
        document.body.appendChild(div); //html ELement in den Code einf�gen lassen
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Aufgabe-08-DynHTML.js.map