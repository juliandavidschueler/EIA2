namespace Abschlussaufgabe {

    window.addEventListener("load", Spiel);

    export let crc2: CanvasRenderingContext2D;

    var feld: number[] = [];

    var snakeKopf: SnakeKopf;
    var snakeKopfAlt: number[][] = [];
    var snakeSchwanz: number[][] = [];
    var snakeRichtung: number = 1;

    var food: number[] = [10, 10];
    var punkte: number = 0;
    var time: number = 200;

    let x: number = 0;

    function Spiel(): void {

        let canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, 1000, 500);

        snakeKopf = new SnakeKopf(2, 2);
        snakeKopfAlt[0] = [snakeKopf.snakeKopf[0] - 1, snakeKopf.snakeKopf[1]];
        snakeKopfAlt[1] = [snakeKopf.snakeKopf[0] - 2, snakeKopf.snakeKopf[1]];
        snakeSchwanz[0] = [snakeKopfAlt[0][0], snakeKopfAlt[0][1]];
        snakeSchwanz[1] = [snakeKopfAlt[1][0], snakeKopfAlt[1][1]];

        animate();

    }

    //Steuerung
    document.addEventListener('keydown', keyboardInput);

    function keyboardInput(event: KeyboardEvent) {

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
        for (let i: number = snakeSchwanz.length - 1; i > 0; i--) {
            snakeKopfAlt[i] = snakeKopfAlt[i - 1];
        }

        snakeKopfAlt[0] = [snakeKopf.snakeKopf[0], snakeKopf.snakeKopf[1]];
    }

    function drawFeld() {
        for (let x: number = 0; x < 25; x++) {

            for (let y: number = 0; y < 50; y++) {
                if (y != snakeKopf.snakeKopf[0] || x != snakeKopf.snakeKopf[1]) {
                    crc2.fillStyle = "white";
                    crc2.fillRect(0 + 20 * y, 0 + 20 * x, 20, 20);
                    crc2.fillStyle = "black";
                    crc2.fillRect(0 + 20 * y, 0 + 20 * x, 18, 18);
                }
                if (y == snakeKopf.snakeKopf[0] || x == snakeKopf.snakeKopf[1]) {
                    crc2.fillStyle = "white";
                    crc2.fillRect(0 + 20 * snakeKopf.snakeKopf[0], 0 + 20 * snakeKopf.snakeKopf[1], 20, 20);
                    crc2.fillStyle = "#3ADF00";
                    crc2.fillRect(0 + 20 * snakeKopf.snakeKopf[0], 0 + 20 * snakeKopf.snakeKopf[1], 18, 18);
                    for (let i: number = 0; i < snakeSchwanz.length; i++) {
                        crc2.fillStyle = "white";
                        crc2.fillRect(0 + 20 * snakeSchwanz[i][0], 0 + 20 * snakeSchwanz[i][1], 20, 20);
                        crc2.fillStyle = "#3ADF00";
                        crc2.fillRect(0 + 20 * snakeSchwanz[i][0], 0 + 20 * snakeSchwanz[i][1], 18, 18);
                    }
                }
                if (y == food[0] || x == food[1]) {
                    crc2.fillStyle = "white";
                    crc2.fillRect(0 + 20 * food[0], 0 + 20 * food[1], 20, 20);
                    crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                    crc2.fillRect(0 + 20 * food[0], 0 + 20 * food[1], 18, 18);

                }
            }
        }
    }

    function drawScore(): void {
        let score: HTMLDivElement = <HTMLDivElement>document.getElementById("score");

        score.innerHTML = "Du hast " + punkte + " Punkte bisher gesammelt!";

        score.style.marginLeft = "2em";
        score.style.marginTop = "0.5em";
    }

    function drawLevel(): void {
        let level: HTMLDivElement = <HTMLDivElement>document.getElementById("score");
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


    function collision(): void {
        for (let i: number = 0; i < snakeSchwanz.length; i++) {
            if (snakeKopf.snakeKopf[0] == snakeSchwanz[i][0] && snakeKopf.snakeKopf[1] == snakeSchwanz[i][1]) {
                console.log(22);
                alert("Game Over");
                location.reload();
            }
        }
    }

    function folgen() {

        for (let i: number = 0; i < snakeSchwanz.length; i++) {
            snakeSchwanz[i] = [snakeKopfAlt[i][0], snakeKopfAlt[i][1]];

        }
    }

    function generateFood(): void {
        food = [Math.round(Math.random() * 49), Math.round(Math.random() * 24)];
    }

    function eat(): void {
        if (snakeKopf.snakeKopf[0] == food[0] && snakeKopf.snakeKopf[1] == food[1]) {
            let neuerPunkt: number[] = [];

            for (let i: number = 0; i < snakeSchwanz.length; i++) {
                neuerPunkt = [snakeSchwanz[i][0], snakeSchwanz[i][1]];
            }

            snakeKopfAlt.push(neuerPunkt);
            snakeSchwanz.push(neuerPunkt);

            generateFood();
            time -= 8;
            punkte++;
        }
    }

    function animate(): void {

        crc2.clearRect(0, 0, 1000, 500);

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
}