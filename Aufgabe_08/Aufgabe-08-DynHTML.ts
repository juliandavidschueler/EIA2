window.addEventListener("load", DynHTML);

function DynHTML(): void {
    
    var anzahl: string = prompt("Anzahl");
    var anzahlNumb: number = parseInt(anzahl); 

    var width: string = prompt("Breite");
    var widthNumb: number = parseInt(width); 

    var height: string = prompt("Höhe");
    var heightNumb: number = parseInt(height); 

    if (anzahlNumb >= 1 && anzahlNumb <= 100) { 
        for (var i: number = 0; i < anzahlNumb; i++) {
            drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", widthNumb, heightNumb); 
        }
    } else {
        window.alert("Die Zahl muss zwischen 1 und 100 liegen"); 
        DynHTML();

    }
}

function drawRect(_x: number, _y: number, _color: string, _width: number, _height: number): void {

    let div: HTMLDivElement = document.createElement("div");
    div.style.width = _width.toString();
    div.style.height = _height.toString();
    div.style.marginLeft = _x.toString();
    div.style.marginTop = _y.toString();
    div.style.backgroundColor = _color;
    document.body.appendChild(div); 
}





