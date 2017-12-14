/*
Aufgabe: (8 DynHTML)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (07.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

window.addEventListener("load", DynHTML);

function DynHTML(): void {

    var anzahl: string = prompt("Anzahl");
    var anzahlNumb: number = parseInt(anzahl);

    if (anzahlNumb >= 1 && anzahlNumb <= 100) {
        for (var i: number = 0; i < anzahlNumb; i++) {
            drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 50, 50);
        }
    }
    else {
        window.alert("Die Zahl muss zwischen 1 und 100 liegen");
        DynHTML();

    }
}

function drawRect(x: number, y: number, color: string, width: number, height: number): void {

    let div: HTMLDivElement = document.createElement("div");
    
    div.style.width = width.toString();
    div.style.height = height.toString();
    div.style.left = x.toString();
    div.style.top = y.toString();
    div.style.background = color;
    
    document.body.appendChild(div);
}
