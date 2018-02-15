var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", Spiel);
    var feld = [];
    var snakeKopf = [2, 2];
    var snakeKopfAlt = [];
    var snakeSchwanz = [];
    var snakeRichtung;
    let x = 0;
    function Spiel() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fillRect(0, 0, 1000, 500);
        snakeKopfAlt[0] = [snakeKopf[0], snakeKopf[1]];
        snakeKopfAlt[1] = [snakeKopf[0], snakeKopf[1]];
        snakeSchwanz[0] = [snakeKopfAlt[0][0], snakeKopfAlt[0][1]];
        snakeSchwanz[1] = [snakeKopfAlt[1][0], snakeKopfAlt[1][1]];
        animate();
    }
    document.addEventListener('keydown', keyboardInput);
    function keyboardInput(event) {
        if (event.key == "w") {
            snakeRichtung = 0;
        }
        else if (event.key == "d") {
            snakeRichtung = 2;
        }
        else if (event.key == "s") {
            snakeRichtung = 1;
        }
        else if (event.key == "a") {
            snakeRichtung = 3;
        }
    }
    function move() {
        if (snakeRichtung == 0) {
            snakeKopf[1]--;
        }
        if (snakeRichtung == 1) {
            snakeKopf[1]++;
        }
        if (snakeRichtung == 2) {
            snakeKopf[0]++;
        }
        if (snakeRichtung == 3) {
            snakeKopf[0]--;
        }
    }
    function speichern() {
        snakeKopfAlt[1] = snakeKopfAlt[0];
        snakeKopfAlt[0] = [snakeKopf[0], snakeKopf[1]];
    }
    function folgen() {
        for (let i = 0; i < snakeSchwanz.length; i++) {
            snakeSchwanz[i] = [snakeKopfAlt[i][0], snakeKopfAlt[i][1]];
        }
    }
    function drawFeld() {
        for (let i = 0; i < 25; i++) {
            for (let y = 0; y < 50; y++) {
                if (y == snakeKopf[0] && i == snakeKopf[1]) {
                    //                    crc2.fillStyle = "white";
                    //                    crc2.fillRect(0 + 20 * snakeKopf[0], 0 + 20 * snakeKopf[1], 20, 20);
                    //                    crc2.fillStyle = "red";
                    //                    crc2.fillRect(0 + 20 * snakeKopf[0], 0 + 20 * snakeKopf[1], 18, 18);
                    for (let i = 0; i < snakeSchwanz.length; i++) {
                        Abschlussaufgabe.crc2.fillStyle = "white";
                        Abschlussaufgabe.crc2.fillRect(0 + 20 * snakeSchwanz[i][0], 0 + 20 * snakeSchwanz[i][1], 20, 20);
                        Abschlussaufgabe.crc2.fillStyle = "red";
                        Abschlussaufgabe.crc2.fillRect(0 + 20 * snakeSchwanz[i][0], 0 + 20 * snakeSchwanz[i][1], 18, 18);
                    }
                }
                else {
                    Abschlussaufgabe.crc2.fillStyle = "white";
                    Abschlussaufgabe.crc2.fillRect(0 + 20 * y, 0 + 20 * i, 20, 20);
                    Abschlussaufgabe.crc2.fillStyle = "black";
                    Abschlussaufgabe.crc2.fillRect(0 + 20 * y, 0 + 20 * i, 18, 18);
                }
            }
        }
    }
    function animate() {
        speichern();
        drawFeld();
        move();
        folgen();
        window.setTimeout(animate, 200);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschlussarbeit_Julian_Schueler.js.map