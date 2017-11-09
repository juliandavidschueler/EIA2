var Aufgabe04;
(function (Aufgabe04) {
    window.addEventListener("load", SkiPisteMitFunktionen);
    let crc2;
    //    let arrayWolkeX: number[] = [];
    //    let arrayWolkeY: number[] = [];
    let wolke = [];
    let arraySkifahrerX = [0, -50];
    let arraySkifahrerY = [150, 200];
    let schnee = [];
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
            schnee[i] = [800, 600];
        }
        for (let i = 0; i < 4; i++) {
            wolke[i] = [0, 50];
        }
        //        function Schnee(x: number, y: number, rad: number, a: number, b: number, color: string): void {
        //
        //            crc2.beginPath();
        //            crc2.arc(x, y, rad, a, b);
        //            crc2.fillStyle = color;
        //            crc2.fill();
        //        }
        //        function Wolke(x: number, y: number): void {
        //
        //            crc2.beginPath();
        //            crc2.arc(x, y, 20, 0, 2 * Math.PI);
        //            crc2.fillStyle = "#FAFAFA";
        //            crc2.fill();
        //            crc2.beginPath();
        //            crc2.arc(x + 15, y + 8, 20, 0, 2 * Math.PI);
        //            crc2.fillStyle = "#FAFAFA";
        //            crc2.fill();
        //            crc2.beginPath();
        //            crc2.arc(x, y + 5, 20, 0, 2 * Math.PI);
        //            crc2.fillStyle = "#FAFAFA";
        //            crc2.fill();
        //            crc2.beginPath();
        //            crc2.arc(x - 20, y + 8, 20, 0, 2 * Math.PI);
        //            crc2.fillStyle = "#FAFAFA";
        //            crc2.fill();
        //
        //            crc2.beginPath();
        //            crc2.arc(x, y, 20, 0, 2 * Math.PI);
        //            crc2.fillStyle = "#FAFAFA";
        //            crc2.fill();
        //            crc2.beginPath();
        //            crc2.arc(x + 70, y + 8, 20, 0, 2 * Math.PI);
        //            crc2.fillStyle = "#FAFAFA";
        //            crc2.fill();
        //            crc2.beginPath();
        //            crc2.arc(x + 50, y + 15, 20, 0, 2 * Math.PI);
        //            crc2.fillStyle = "#FAFAFA";
        //            crc2.fill();
        //            crc2.beginPath();
        //            crc2.arc(x + 30, y + 8, 20, 0, 2 * Math.PI);
        //            crc2.fillStyle = "#FAFAFA";
        //            crc2.fill();
        //        }
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
            for (let i = 0; i < wolke.length; i++) {
                wolke[i][0] += Math.random() + 5;
                wolke[i][1] += Math.random() - 0.5;
                crc2.beginPath();
                crc2.arc(wolke[i][0], wolke[i][1], 20, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
                crc2.arc(wolke[i][0] + 15, wolke[i][1] + 8, 20, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
                crc2.arc(wolke[i][0], wolke[i][1] + 5, 20, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
                crc2.arc(wolke[i][0] - 20, wolke[i][1] + 8, 20, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
                crc2.arc(wolke[i][0], wolke[i][1], 20, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
                crc2.arc(wolke[i][0] + 70, wolke[i][1] + 8, 20, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
                crc2.arc(wolke[i][0] + 50, wolke[i][1] + 15, 20, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
                crc2.arc(wolke[i][0] + 30, wolke[i][1] + 8, 20, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
            }
            //Schnee
            for (let i = 0; i < schnee.length; i++) {
                schnee[i][1] += 1;
                schnee[i][0] = 800 * Math.random();
                schnee[i][1] = 600 * Math.random();
                crc2.beginPath();
                crc2.arc(schnee[i][0], schnee[i][1], 1.5, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAFAFA";
                crc2.fill();
            }
            //Skifahrer1    
            arraySkifahrerX[0] += 2;
            arraySkifahrerY[0] += 1;
            Skifahrer(arraySkifahrerX[0], arraySkifahrerY[0]);
            if (arraySkifahrerX[0] > 800) {
                arraySkifahrerX[0] = 0;
                arraySkifahrerY[0] = 150;
            }
            //Skifahrer2
            arraySkifahrerX[1] += 4;
            arraySkifahrerY[1] += 2;
            Skifahrer(arraySkifahrerX[1], arraySkifahrerY[1]);
            if (arraySkifahrerX[1] > 800) {
                arraySkifahrerX[1] = -50;
                arraySkifahrerY[1] = 200;
            }
            window.setTimeout(animate, 10);
        }
    }
})(Aufgabe04 || (Aufgabe04 = {}));
//# sourceMappingURL=Aufgabe-04-Assoziative-Skipiste.js.map