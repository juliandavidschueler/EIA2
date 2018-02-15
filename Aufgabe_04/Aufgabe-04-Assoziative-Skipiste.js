var Aufgabe04;
(function (Aufgabe04) {
    window.addEventListener("load", SkiPisteAssoziativ);
    let crc2;
    let square = [];
    let arrayWolkeX = [];
    let arrayWolkeY = [];
    let arraySchneeX = [];
    let arraySchneeY = [];
    let Hintergrund;
    function SkiPisteAssoziativ() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "#65B5DC";
        crc2.fillRect(0, 0, 800, 600);
        /*Berg1*/
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(400, 100);
        crc2.lineTo(800, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#D3D4D4";
        crc2.fill();
        /*Skipiste*/
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(800, 500);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#E8EEEE";
        crc2.fill();
        /*Baum1*/
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(50, 500);
        crc2.lineTo(100, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#276D28";
        crc2.fill();
        /*Baum2*/
        crc2.beginPath();
        crc2.moveTo(100, 600);
        crc2.lineTo(150, 400);
        crc2.lineTo(180, 600);
        crc2.lineTo(100, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#276D28";
        crc2.fill();
        /*Berg2*/
        crc2.beginPath();
        crc2.moveTo(800, 300);
        crc2.lineTo(700, 100);
        crc2.lineTo(500, 350);
        crc2.lineTo(800, 500);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#D3D4D4";
        crc2.fill();
        /*SkiLift*/
        crc2.beginPath();
        crc2.moveTo(0, 75);
        crc2.lineTo(800, 475);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(700, 425);
        crc2.lineTo(700, 470);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(690, 470);
        crc2.lineTo(710, 470);
        crc2.stroke();
        //Aufgabe 2
        function BaumZufaellig(x, y, color) {
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 40, y + 160);
            crc2.lineTo(x - 40, y + 160);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = color;
            crc2.fill();
        }
        for (let i = 0; i < 4; i++) {
            let x = 200 + Math.random() * 300;
            let y = 400 + Math.random() * 50;
            BaumZufaellig(x, y, "#276D28");
        }
        //Aufgabe 3   
        Hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        for (let i = 0; i < 170; i++) {
            arraySchneeX[i] = 800 * Math.random();
            arraySchneeY[i] = 600 * Math.random();
        }
        for (let i = 0; i < 4; i++) {
            arrayWolkeX[i] = 800 * Math.random();
            arrayWolkeY[i] = 100 * Math.random();
        }
        //Skifahrer
        for (let i = 0; i < 3; i++) {
            square[i] = {
                x: 0,
                y: 100,
                dx: Math.random() + 1.5 * 3,
                dy: Math.random() + 1 * 2.5,
                Jacke: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                Hose: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
    }
    function Schnee(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "ffffff";
        crc2.fill();
    }
    function Wolke(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 15, y + 8, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x, y + 5, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x - 20, y + 8, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x, y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 70, y + 8, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 50, y + 15, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 30, y + 8, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
    }
    function Skifahrer(x, y) {
        crc2.beginPath();
        crc2.fillStyle = "#81F7F3";
        crc2.fillRect(x, y - 5, 7, 25);
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.fillRect(x - 6, y + 20, 30, 3);
        crc2.beginPath();
        crc2.fillStyle = "#FA5882";
        crc2.fillRect(x, y - 5, 7, 10);
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(x + 5, y - 10, 7, 0, 2 * Math.PI);
        crc2.fill();
    }
    function animate() {
        crc2.putImageData(Hintergrund, 0, 0);
        //Wolke
        for (let i = 0; i < arrayWolkeX.length; i++) {
            arrayWolkeX[i] += 1;
            Wolke(arrayWolkeX[i], arrayWolkeY[i]);
            if (arrayWolkeX[i] > 800) {
                arrayWolkeX[i] = 0;
            }
        }
        //Schnee
        for (let i = 0; i < arraySchneeY.length; i++) {
            arraySchneeY[i] += 1;
            Schnee(arraySchneeX[i], arraySchneeY[i]);
            if (arraySchneeY[i] > 600) {
                arraySchneeY[i] = 0;
            }
        }
        //Skifahrer
        for (let i = 0; i < square.length; i++) {
            moveAndDrawSkifahrer(square[i]);
        }
        window.setTimeout(animate, 10);
        function moveAndDrawSkifahrer(square) {
            square.x += square.dx;
            square.y += square.dy;
            if (square.x > 800) {
                square.x = 0;
                square.y = 100;
            }
            crc2.beginPath();
            crc2.fillStyle = square.Jacke;
            crc2.fillRect(square.x, square.y - 5, 7, 25);
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(square.x - 6, square.y + 20, 30, 3);
            crc2.beginPath();
            crc2.fillStyle = square.Hose;
            crc2.fillRect(square.x, square.y - 5, 7, 10);
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(square.x + 5, square.y - 10, 7, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
})(Aufgabe04 || (Aufgabe04 = {}));
//# sourceMappingURL=Aufgabe-04-Assoziative-Skipiste.js.map