namespace Aufgabe06 {
    
    export let crc2: CanvasRenderingContext2D;

    let shapes: MovingShape[] = [];

    window.addEventListener("load", SkiPisteInheritance);

    let Hintergrund: ImageData;

    function SkiPisteInheritance(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        crc2.fillStyle = "#65B5DC";
        crc2.fillRect(0, 0, 800, 600);
        
        for (let i: number = 0; i < 3; i++) {
            let s: Skifahrer = new Skifahrer(Math.random() * 150, 200);
            shapes.push(s);
        }
        
        for (let i: number = 0; i < 170; i++) {
            let s: Schneeflocken = new Schneeflocken (Math.random() * 800, Math.random() * 600 );
            shapes.push(s);
        }
                
        for (let i: number = 0; i < 2; i++) {
            let s: Wolken = new Wolken (0, Math.random() * 10 + 50);
            shapes.push(s);
        }

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
        
        for (let i: number = 0; i < 4; i++) {

            let x: number = 200 + Math.random() * 300;
            let y: number = 400 + Math.random() * 50;

            BaumZufaellig(x, y, "#276D28")

        }

        Hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();
    } 
    
    //Ende Skipiste Funktion
    
    function BaumZufaellig(x: number, y: number, color: string): void {

            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 40, y + 160);
            crc2.lineTo(x - 40, y + 160);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = color;
            crc2.fill();

        }

    function animate(): void {

        crc2.putImageData(Hintergrund, 0, 0);

        for (let i: number = 0; i < shapes.length; i++) {
            let s: MovingShape = shapes[i];
            s.update();
        }

        window.setTimeout(animate, 10);
    }
}