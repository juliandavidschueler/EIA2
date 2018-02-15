var Aufgabe06;
(function (Aufgabe06) {
    let shapes = [];
    window.addEventListener("load", SkiPisteInheritance);
    let Hintergrund;
    function SkiPisteInheritance() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe06.crc2 = canvas.getContext("2d");
        Aufgabe06.crc2.fillStyle = "#65B5DC";
        Aufgabe06.crc2.fillRect(0, 0, 800, 600);
        for (let i = 0; i < 3; i++) {
            let s = new Aufgabe06.Skifahrer(Math.random() * 150, 200);
            shapes.push(s);
        }
        for (let i = 0; i < 170; i++) {
            let s = new Aufgabe06.Schneeflocken(Math.random() * 800, Math.random() * 600);
            shapes.push(s);
        }
        for (let i = 0; i < 2; i++) {
            let s = new Aufgabe06.Wolken(0, Math.random() * 10 + 50);
            shapes.push(s);
        }
        /*Berg1*/
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(0, 600);
        Aufgabe06.crc2.lineTo(400, 100);
        Aufgabe06.crc2.lineTo(800, 600);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#D3D4D4";
        Aufgabe06.crc2.fill();
        /*Skipiste*/
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(0, 100);
        Aufgabe06.crc2.lineTo(800, 500);
        Aufgabe06.crc2.lineTo(800, 600);
        Aufgabe06.crc2.lineTo(0, 600);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#E8EEEE";
        Aufgabe06.crc2.fill();
        /*Baum1*/
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(0, 600);
        Aufgabe06.crc2.lineTo(50, 500);
        Aufgabe06.crc2.lineTo(100, 600);
        Aufgabe06.crc2.lineTo(0, 600);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#276D28";
        Aufgabe06.crc2.fill();
        /*Baum2*/
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(100, 600);
        Aufgabe06.crc2.lineTo(150, 400);
        Aufgabe06.crc2.lineTo(180, 600);
        Aufgabe06.crc2.lineTo(100, 600);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#276D28";
        Aufgabe06.crc2.fill();
        /*Berg2*/
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(800, 300);
        Aufgabe06.crc2.lineTo(700, 100);
        Aufgabe06.crc2.lineTo(500, 350);
        Aufgabe06.crc2.lineTo(800, 500);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = "#D3D4D4";
        Aufgabe06.crc2.fill();
        /*SkiLift*/
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(0, 75);
        Aufgabe06.crc2.lineTo(800, 475);
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(700, 425);
        Aufgabe06.crc2.lineTo(700, 470);
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(690, 470);
        Aufgabe06.crc2.lineTo(710, 470);
        Aufgabe06.crc2.stroke();
        for (let i = 0; i < 4; i++) {
            let x = 200 + Math.random() * 300;
            let y = 400 + Math.random() * 50;
            BaumZufaellig(x, y, "#276D28");
        }
        Hintergrund = Aufgabe06.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //Ende Skipiste Funktion
    function BaumZufaellig(x, y, color) {
        Aufgabe06.crc2.beginPath();
        Aufgabe06.crc2.moveTo(x, y);
        Aufgabe06.crc2.lineTo(x + 40, y + 160);
        Aufgabe06.crc2.lineTo(x - 40, y + 160);
        Aufgabe06.crc2.closePath();
        Aufgabe06.crc2.stroke();
        Aufgabe06.crc2.fillStyle = color;
        Aufgabe06.crc2.fill();
    }
    function animate() {
        Aufgabe06.crc2.putImageData(Hintergrund, 0, 0);
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i];
            s.update();
        }
        window.setTimeout(animate, 10);
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=Main.js.map