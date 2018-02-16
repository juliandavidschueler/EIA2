var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", Spiel);
    var feld = [];
    var snakeKopf;
    var snakeKopfAlt = [];
    var snakeSchwanz = [];
    var snakeRichtung = 1;
    var food = [10, 10];
    var punkte = 0;
    var time = 200;
    let x = 0;
    function Spiel() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fillRect(0, 0, 1000, 500);
        snakeKopf = new Abschlussaufgabe.SnakeKopf(2, 2);
        snakeKopfAlt[0] = [snakeKopf.snakeKopf[0] - 1, snakeKopf.snakeKopf[1]];
        snakeKopfAlt[1] = [snakeKopf.snakeKopf[0] - 2, snakeKopf.snakeKopf[1]];
        snakeSchwanz[0] = [snakeKopfAlt[0][0], snakeKopfAlt[0][1]];
        snakeSchwanz[1] = [snakeKopfAlt[1][0], snakeKopfAlt[1][1]];
        animate();
    }
    //Steuerung
    document.addEventListener('keydown', keyboardInput);
    function keyboardInput(event) {
        if (event.key == "w") {
            snakeKopf.n = 0;
        }
        else if (event.key == "d") {
            snakeKopf.n = 2;
        }
        else if (event.key == "s") {
            snakeKopf.n = 1;
        }
        else if (event.key == "a") {
            snakeKopf.n = 3;
        }
    }
    //Snake Funktionen
    function speichern() {
        for (let i = snakeSchwanz.length - 1; i > 0; i--) {
            snakeKopfAlt[i] = snakeKopfAlt[i - 1];
        }
        snakeKopfAlt[0] = [snakeKopf.snakeKopf[0], snakeKopf.snakeKopf[1]];
    }
    function drawFeld() {
        for (let x = 0; x < 25; x++) {
            for (let y = 0; y < 50; y++) {
                if (y != snakeKopf.snakeKopf[0] || x != snakeKopf.snakeKopf[1]) {
                    Abschlussaufgabe.crc2.fillStyle = "white";
                    Abschlussaufgabe.crc2.fillRect(0 + 20 * y, 0 + 20 * x, 20, 20);
                    Abschlussaufgabe.crc2.fillStyle = "black";
                    Abschlussaufgabe.crc2.fillRect(0 + 20 * y, 0 + 20 * x, 18, 18);
                }
                if (y == snakeKopf.snakeKopf[0] || x == snakeKopf.snakeKopf[1]) {
                    Abschlussaufgabe.crc2.fillStyle = "white";
                    Abschlussaufgabe.crc2.fillRect(0 + 20 * snakeKopf.snakeKopf[0], 0 + 20 * snakeKopf.snakeKopf[1], 20, 20);
                    Abschlussaufgabe.crc2.fillStyle = "#3ADF00";
                    Abschlussaufgabe.crc2.fillRect(0 + 20 * snakeKopf.snakeKopf[0], 0 + 20 * snakeKopf.snakeKopf[1], 18, 18);
                    for (let i = 0; i < snakeSchwanz.length; i++) {
                        Abschlussaufgabe.crc2.fillStyle = "white";
                        Abschlussaufgabe.crc2.fillRect(0 + 20 * snakeSchwanz[i][0], 0 + 20 * snakeSchwanz[i][1], 20, 20);
                        Abschlussaufgabe.crc2.fillStyle = "#3ADF00";
                        Abschlussaufgabe.crc2.fillRect(0 + 20 * snakeSchwanz[i][0], 0 + 20 * snakeSchwanz[i][1], 18, 18);
                    }
                }
                if (y == food[0] || x == food[1]) {
                    Abschlussaufgabe.crc2.fillStyle = "white";
                    Abschlussaufgabe.crc2.fillRect(0 + 20 * food[0], 0 + 20 * food[1], 20, 20);
                    Abschlussaufgabe.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                    Abschlussaufgabe.crc2.fillRect(0 + 20 * food[0], 0 + 20 * food[1], 18, 18);
                }
            }
        }
    }
    function drawScore() {
        let score = document.getElementById("score");
        score.innerHTML = "Du hast " + punkte + " Punkte bisher gesammelt!";
        score.style.marginLeft = "2em";
        score.style.marginTop = "0.5em";
    }
    function drawLevel() {
        let level = document.getElementById("score");
        level.innerHTML += "<br>" && "<p>";
        if (punkte <= 10) {
            level.innerHTML += "Du bist ein Anfänger";
        }
        else if (punkte <= 20) {
            level.innerHTML += "Du bist ein Fortgeschrittener";
        }
        else if (punkte <= 30) {
            level.innerHTML += "Du bist ein Profi";
        }
        level.innerHTML += "<br>" && "<p>";
        level.innerHTML += "Anfänger (bis 10 Punkte)" + "<br>" + "Fortgeschrittener (bis 20 Punkte)" + "<br>" + "Profi (ab 20 Punkten)";
    }
    function move() {
    }
    function collision() {
        for (let i = 0; i < snakeSchwanz.length; i++) {
            if (snakeKopf.snakeKopf[0] == snakeSchwanz[i][0] && snakeKopf.snakeKopf[1] == snakeSchwanz[i][1]) {
                console.log(22);
                alert("Game Over");
                location.reload();
            }
        }
    }
    function folgen() {
        for (let i = 0; i < snakeSchwanz.length; i++) {
            snakeSchwanz[i] = [snakeKopfAlt[i][0], snakeKopfAlt[i][1]];
        }
    }
    function generateFood() {
        food = [Math.round(Math.random() * 49), Math.round(Math.random() * 24)];
    }
    function eat() {
        if (snakeKopf.snakeKopf[0] == food[0] && snakeKopf.snakeKopf[1] == food[1]) {
            let neuerPunkt = [];
            for (let i = 0; i < snakeSchwanz.length; i++) {
                neuerPunkt = [snakeSchwanz[i][0], snakeSchwanz[i][1]];
            }
            snakeKopfAlt.push(neuerPunkt);
            snakeSchwanz.push(neuerPunkt);
            generateFood();
            time -= 8;
            punkte++;
        }
    }
    function animate() {
        Abschlussaufgabe.crc2.clearRect(0, 0, 1000, 500);
        speichern();
        drawFeld();
        drawScore();
        drawLevel();
        snakeKopf.update();
        collision();
        folgen();
        eat();
        window.setTimeout(animate, time);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschlussarbeit_Julian_Schueler.js.map