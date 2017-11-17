var L05_Class;
(function (L05_Class) {
    let ski;
    let skiarray = [];
    let schnee;
    let schneearray = [];
    let wolke;
    let wolkenarray = [];
    window.addEventListener("load", SkiPisteOO);
    let Hintergrund;
    function SkiPisteOO() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L05_Class.crc2 = canvas.getContext("2d");
        console.log(L05_Class.crc2);
        L05_Class.crc2.fillStyle = "#65B5DC";
        L05_Class.crc2.fillRect(0, 0, 800, 600);
        ski = new L05_Class.Skifahrer(0, 200);
        ski.setRandomStyle();
        for (let i = 0; i < 2; i++) {
            let s = new L05_Class.Skifahrer(Math.random() * 150 + 10, 200);
            s.setRandomStyle();
            skiarray[i] = s;
        }
        schnee = new L05_Class.Schneeflocken(0, 0);
        for (let i = 0; i < 170; i++) {
            let s = new L05_Class.Schneeflocken(Math.random() * 800, Math.random() * 600);
            schneearray[i] = s;
        }
        wolke = new L05_Class.Wolken(0, 50);
        for (let i = 0; i < 2; i++) {
            let s = new L05_Class.Wolken(Math.random() * 100, 50 + 50);
            wolkenarray[i] = s;
        }
        /*Berg1*/
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(0, 600);
        L05_Class.crc2.lineTo(400, 100);
        L05_Class.crc2.lineTo(800, 600);
        L05_Class.crc2.closePath();
        L05_Class.crc2.stroke();
        L05_Class.crc2.fillStyle = "#D3D4D4";
        L05_Class.crc2.fill();
        /*Skipiste*/
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(0, 100);
        L05_Class.crc2.lineTo(800, 500);
        L05_Class.crc2.lineTo(800, 600);
        L05_Class.crc2.lineTo(0, 600);
        L05_Class.crc2.closePath();
        L05_Class.crc2.stroke();
        L05_Class.crc2.fillStyle = "#E8EEEE";
        L05_Class.crc2.fill();
        /*Baum1*/
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(0, 600);
        L05_Class.crc2.lineTo(50, 500);
        L05_Class.crc2.lineTo(100, 600);
        L05_Class.crc2.lineTo(0, 600);
        L05_Class.crc2.closePath();
        L05_Class.crc2.stroke();
        L05_Class.crc2.fillStyle = "#276D28";
        L05_Class.crc2.fill();
        /*Baum2*/
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(100, 600);
        L05_Class.crc2.lineTo(150, 400);
        L05_Class.crc2.lineTo(180, 600);
        L05_Class.crc2.lineTo(100, 600);
        L05_Class.crc2.closePath();
        L05_Class.crc2.stroke();
        L05_Class.crc2.fillStyle = "#276D28";
        L05_Class.crc2.fill();
        /*Berg2*/
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(800, 300);
        L05_Class.crc2.lineTo(700, 100);
        L05_Class.crc2.lineTo(500, 350);
        L05_Class.crc2.lineTo(800, 500);
        L05_Class.crc2.closePath();
        L05_Class.crc2.stroke();
        L05_Class.crc2.fillStyle = "#D3D4D4";
        L05_Class.crc2.fill();
        /*SkiLift*/
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(0, 75);
        L05_Class.crc2.lineTo(800, 475);
        L05_Class.crc2.stroke();
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(700, 425);
        L05_Class.crc2.lineTo(700, 470);
        L05_Class.crc2.stroke();
        L05_Class.crc2.beginPath();
        L05_Class.crc2.moveTo(690, 470);
        L05_Class.crc2.lineTo(710, 470);
        L05_Class.crc2.stroke();
        function BaumZufaellig(x, y, color) {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.moveTo(x, y);
            L05_Class.crc2.lineTo(x + 40, y + 160);
            L05_Class.crc2.lineTo(x - 40, y + 160);
            L05_Class.crc2.closePath();
            L05_Class.crc2.stroke();
            L05_Class.crc2.fillStyle = color;
            L05_Class.crc2.fill();
        }
        for (let i = 0; i < 4; i++) {
            let x = 200 + Math.random() * 300;
            let y = 400 + Math.random() * 50;
            BaumZufaellig(x, y, "#276D28");
        }
        Hintergrund = L05_Class.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function animate() {
        L05_Class.crc2.putImageData(Hintergrund, 0, 0);
        ski.update();
        for (let i = 0; i < skiarray.length; i++) {
            let s = skiarray[i];
            s.update();
        }
        schnee.update();
        for (let i = 0; i < schneearray.length; i++) {
            let s = schneearray[i];
            s.update();
        }
        wolke.update();
        for (let i = 0; i < wolkenarray.length; i++) {
            let s = wolkenarray[i];
            s.update();
        }
        window.setTimeout(animate, 8);
    }
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=Main.js.map