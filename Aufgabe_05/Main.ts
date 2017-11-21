namespace L05_Class {
    export let crc2: CanvasRenderingContext2D;

    let ski: Skifahrer;
    let skiarray: Skifahrer[] = [];

    let schnee: Schneeflocken;
    let schneearray: Schneeflocken[] = [];
    
    let wolke: Wolken;
    let wolkenarray: Wolken[] = [];

    window.addEventListener("load", SkiPisteOO);

    let Hintergrund: ImageData;

    function SkiPisteOO(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#65B5DC";
        crc2.fillRect(0, 0, 800, 600);

        ski = new Skifahrer(0, 200);
        ski.setRandomStyle();

        for (let i: number = 0; i < 2; i++) {
            let s: Skifahrer = new Skifahrer(Math.random() * 150 + 10, 200);
            s.setRandomStyle();
            skiarray[i] = s;
        }

        schnee = new Schneeflocken(0, 0);
        
        for (let i: number = 0; i < 170; i++) {
            let s: Schneeflocken = new Schneeflocken (Math.random() * 800, Math.random() * 600 );
            schneearray[i] = s;
        }
        
        wolke = new Wolken(0, 50);
        
        for (let i: number = 0; i < 2; i++) {
            let s: Wolken = new Wolken (Math.random() * 100, 50 +50);
            wolkenarray[i] = s;
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

        ski.update();

        for (let i: number = 0; i < skiarray.length; i++) {
            let s: Skifahrer = skiarray[i];
            s.update();
        }
        
        schnee.update();
        
        for (let i: number = 0; i < schneearray.length; i++) {
            let s: Schneeflocken = schneearray[i];
            s.update();
        }
        
        wolke.update();
        
        for (let i: number = 0; i < wolkenarray.length; i++) {
            let s: Wolken = wolkenarray[i];
            s.update();
        }

        window.setTimeout(animate, 8);
    }
}