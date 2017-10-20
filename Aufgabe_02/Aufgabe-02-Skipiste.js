window.addEventListener("load", SkiPisteMitFunktionen);
function SkiPisteMitFunktionen() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
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
    crc2.beginPath();
    crc2.arc(500, 70, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(515, 78, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(500, 85, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(480, 78, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    /*Wolke2*/
    crc2.beginPath();
    crc2.arc(550, 100, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(570, 108, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(550, 115, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(530, 108, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
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
    //    function Baum (_x: number, _y: number, _color: string) : void {
    //        
    //    crc2.beginPath();
    //    crc2.moveTo(_x, _y);
    //    crc2.lineTo(_x+40, _y+100);
    //    crc2.lineTo(_x-40, _y+100);
    //    crc2.closePath();
    //    crc2.stroke();
    //    crc2.fillStyle = _color;
    //    crc2.fill();
    //        
    //        }
    //    
    //     for (let i: number = 0; i < 3; i++) {
    //        
    //        Baum(100 + i * 60, 500, "#276D28");
    //
    //     }
    function BaumZufaellig(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 40, _y + 160);
        crc2.lineTo(_x - 40, _y + 160);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    for (let i = 0; i < 4; i++) {
        let x = 0 + Math.random() * 300;
        let y = 400 + Math.random() * 50;
        BaumZufaellig(x, y, "#276D28");
    }
    function Schneeflocken(_x, _y, _radius, _anfang, _ende, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _anfang, _ende);
        crc2.fillStyle = _color;
        crc2.fill();
    }
    for (let i = 0; i < 170; i++) {
        let x = 0 + Math.random() * 800;
        let y = 0 + Math.random() * 600;
        Schneeflocken(x, y, 1.5, 0, 1.5 * Math.PI, "#ffffff");
    }
}
//# sourceMappingURL=Aufgabe-02-Skipiste.js.map