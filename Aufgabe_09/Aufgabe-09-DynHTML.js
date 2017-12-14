/*
Aufgabe: (8 DynHTML)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (07.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe09;
(function (Aufgabe09) {
    var L08_Events;
    (function (L08_Events) {
        window.addEventListener("load", init);
        document.addEventListener("keydown", handleKeydown);
        //document.onkeydown = handleKeydown;
        document.addEventListener("click", handleClick);
        function handleClick(_event) {
            console.log("Target: " + _event.target);
            console.log("currentTarget: " + _event.currentTarget);
        }
        function handleKeydown(_event) {
            console.log(_event);
        }
        function init(_event) {
            console.log("Hallo");
            console.log(_event);
            let h1 = document.getElementsByTagName("h1")[0];
            h1.addEventListener("mouseover", handleMouseOverH1);
            h1.addEventListener("click", handleClick);
        }
        function handleMouseOverH1(_event) {
            console.log(_event.target);
            let h1 = _event.target;
            h1.style.color = "#ff0000";
        }
    })(L08_Events || (L08_Events = {}));
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=Aufgabe-09-DynHTML.js.map