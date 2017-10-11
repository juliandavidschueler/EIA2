
var name:string = prompt ("Bitte gib deinen Namen ein");

function init() : void {
    let node = document.getElementById("Inhalt");
    
    if(name.length < 1) { node.innerHTML = "Gib gefälligst deinen Namen ein!"; }
    
    if(name.length >= 1) { node.innerHTML = "Servus" + " " + name; }
    
    }

window.addEventListener ("load", init);