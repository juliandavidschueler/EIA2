var Aufgabe03;
(function (Aufgabe03) {
    window.addEventListener("load", SkiPisteMitFunktionen);
    let crc2;
    let arrayWolkeX = [];
    let arrayWolkeY = [];
    let arraySkifahrerX = [0];
    let arraySkifahrerY = [150];
    let arraySchneeX = [];
    let arraySchneeY = [];
    let Hintergrund;
    function SkiPisteMitFunktionen() {
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
        /*Wolke1*/
        //        crc2.beginPath();
        //        crc2.arc(500, 70, 20, 0, 2 * Math.PI);
        //        crc2.fillStyle = "#FAFAFA";
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.arc(515, 78, 20, 0, 2 * Math.PI);
        //        crc2.fillStyle = "#FAFAFA";
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.arc(500, 85, 20, 0, 2 * Math.PI);
        //        crc2.fillStyle = "#FAFAFA";
        //        crc2.fill();
        //        crc2.beginPath();
        crc2.arc(480, 78, 20, 0, 2 * Math.PI);
        //        crc2.fillStyle = "#FAFAFA";
        //        crc2.fill();
        /*Wolke2*/
        //        crc2.beginPath();
        //        crc2.arc(550, 100, 20, 0, 2 * Math.PI);
        //        crc2.fillStyle = "#FAFAFA";
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.arc(570, 108, 20, 0, 2 * Math.PI);
        //        crc2.fillStyle = "#FAFAFA";
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.arc(550, 115, 20, 0, 2 * Math.PI);
        //        crc2.fillStyle = "#FAFAFA";
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.arc(530, 108, 20, 0, 2 * Math.PI);
        //        crc2.fillStyle = "#FAFAFA";
        //        crc2.fill();
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
        for (let i = 0; i < 4; i++) {
            let x = 200 + Math.random() * 300;
            let y = 400 + Math.random() * 50;
            BaumZufaellig(x, y, "#276D28");
        }
        //        for (let i: number = 0; i < 170; i++) {
        //
        //            arraySchneeX[i] = Math.random() * 800 - 0;
        //            arraySchneeY[i] = Math.random() * 600 - 0;
        //
        //        }
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
        function Schneeflocken(x, y, rad, a, b, color) {
            crc2.beginPath();
            crc2.arc(x, y, rad, a, b);
            crc2.fillStyle = color;
            crc2.fill();
        }
        //Aufgabe 3    
        Hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        for (let i = 0; i < 5; i++) {
            arrayWolkeX[i] = 800 * Math.random();
            arrayWolkeY[i] = 100 * Math.random();
        }
        for (let i = 0; i < 170; i++) {
            arraySchneeX[i] = 800 * Math.random();
            arraySchneeY[i] = 600 * Math.random();
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
            crc2.moveTo(x, y);
            crc2.lineTo(x + 30, y + 15);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(x + 7, y + 4);
            crc2.lineTo(x + 20, y - 17);
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(x + 20, y - 17);
            crc2.lineTo(x, y - 35);
            crc2.closePath();
            crc2.stroke();
        }
        function Schnee(x, y, rad, a, b, color) {
            crc2.beginPath();
            crc2.arc(x, y, rad, a, b);
            crc2.fillStyle = color;
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
            //Skifahrer
            for (let i = 0; i < arraySkifahrerX.length; i++) {
                arraySkifahrerX[i] += 2;
                arraySkifahrerY[i] += 1;
                Skifahrer(arraySkifahrerX[i], arraySkifahrerY[i]);
                if (arraySkifahrerX[i] > 800) {
                    arraySkifahrerX[i] = 0;
                    arraySkifahrerY[i] = 150;
                }
            }
            //Schnee
            for (let i = 0; i < arraySchneeY.length; i++) {
                arraySchneeY[i] += 1;
                Schnee(arraySchneeX[i], arraySchneeY[i], 1.5, 0, 1.5 * Math.PI, "#ffffff");
                if (arraySchneeY[i] > 600) {
                    arraySchneeY[i] = 0;
                }
            }
            window.setTimeout(animate, 10);
        }
    }
})(Aufgabe03 || (Aufgabe03 = {}));
//# sourceMappingURL=Aufgabe-03-Schneegestoeber.js.map