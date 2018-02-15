/*
Aufgabe: (9 DynHTML)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (15.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe09;
(function (Aufgabe09) {
    window.addEventListener("load", Erpresserbrief);
    window.addEventListener("keydown", handleKeyDown);
    let text;
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let saveLetter = "";
    function Erpresserbrief() {
        for (let i = 0; i < letters.length; i++) {
            let l = document.createElement("div");
            l.style.width = "25px";
            l.style.height = "20px";
            l.style.margin = "2px";
            l.style.backgroundColor = "black";
            l.style.color = "white";
            l.style.fontSize = "20px";
            l.innerText = letters[i];
            l.id = letters[i];
            l.className = "letters";
            l.addEventListener("click", handleLetterClick);
            document.body.appendChild(l);
        }
        let box = document.createElement("div");
        box.style.width = "750px";
        box.style.height = "300px";
        box.style.marginTop = "20px";
        box.style.backgroundColor = "black";
        box.addEventListener("click", handleBoxClick);
        document.body.appendChild(box);
    }
    function handleLetterClick(_event) {
        console.log(_event.target);
        let l = _event.target;
        l.style.color = "#ffffff";
        l.style.backgroundColor = "#000000";
        saveLetter = l.id;
        let letterList = document.getElementsByClassName("letters");
        for (let i = 0; i < letterList.length; i++) {
            if (saveLetter != letterList[i].id) {
                letterList[i].style.backgroundColor = "grey";
            }
        }
    }
    function handleKeyDown(_event) {
        if (_event.keyCode > 64 && _event.keyCode < 91 || _event.keyCode == 16 || _event.keyCode == 20) {
            saveLetter = String.fromCharCode(_event.keyCode);
        }
        else {
            return;
        }
    }
    function handleBoxClick(_event) {
        if (saveLetter == "")
            return;
        text = document.createElement("div");
        text.innerText = saveLetter;
        text.style.position = "absolute";
        text.style.color = "white";
        text.style.width = "35px";
        text.style.height = "35px";
        text.style.fontSize = "30px";
        text.style.left = _event.pageX + "px";
        text.style.top = _event.pageY + "px";
        text.addEventListener("click", deleteLetter);
        document.body.appendChild(text);
    }
    function deleteLetter(_event) {
        if (_event.altKey == false)
            return;
        else {
            let remove = _event.target;
            document.body.removeChild(remove);
        }
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=Aufgabe-09-DynHTML.js.map