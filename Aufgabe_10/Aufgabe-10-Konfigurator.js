/*
Aufgabe: (10 Konfigurator)
Name: (Julian Schüler)
Matrikel: (256033)
Datum: (05.01.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var SendData;
(function (SendData) {
    window.addEventListener("load", Konfigurator);
    function Konfigurator(_event) {
        setupColorDivs();
    }
    function setupColorDivs() {
        let colors = ["red", "green", "blue"];
        let divs = document.getElementsByTagName("div");
        for (let i = 0; i < divs.length; i++) {
            console.log(i);
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }
    function handleClickOnDiv(_event) {
        let style = _event.target.style;
        console.log(style.backgroundColor);
        sendRequest(style.backgroundColor);
    }
    function sendRequest(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?color=" + _color, true);
        //xhr.open("GET", "https://eia2-servertest.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
})(SendData || (SendData = {}));
//# sourceMappingURL=Aufgabe-10-Konfigurator.js.map