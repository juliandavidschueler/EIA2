namespace Aufgabe03 {

    window.addEventListener("load", SkiPisteMitFunktionen);

    let crc2: CanvasRenderingContext2D;

    let arrayWolkeX: number[] = [];
    let arrayWolkeY: number[] = [];

    let arraySkifahrerX: number[] = [0, -50];
    let arraySkifahrerY: number[] = [150, 200];

    let arraySchneeX: number[] = [];
    let arraySchneeY: number[] = [];

    let Hintergrund: ImageData;

    function SkiPisteMitFunktionen(): void {

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

        for (let i: number = 0; i < 4; i++) {

            let x: number = 200 + Math.random() * 300;
            let y: number = 400 + Math.random() * 50;

            BaumZufaellig(x, y, "#276D28")

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


        function Schneeflocken(x: number, y: number, rad: number, a: number, b: number, color: string): void {

            crc2.beginPath();
            crc2.arc(x, y, rad, a, b);
            crc2.fillStyle = color;
            crc2.fill();

        }



        //Aufgabe 3    
        Hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();

        for (let i: number = 0; i < 5; i++) {
            arrayWolkeX[i] = 800 * Math.random();
            arrayWolkeY[i] = 100 * Math.random();
        }


        for (let i: number = 0; i < 170; i++) {
            arraySchneeX[i] = 800 * Math.random();
            arraySchneeY[i] = 600 * Math.random();
        }


        function Wolke(x: number, y: number): void {

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
        
        function Skifahrer(x: number, y: number): void {

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(x, y-5, 7, 25);
            
            crc2.beginPath();
            crc2.fillRect(x-6, y+20, 30, 3);
            
            crc2.beginPath();
            crc2.arc(x+5, y-10, 7, 0, 2 * Math.PI);
            crc2.fill();
            }

        function Schnee(x: number, y: number, rad: number, a: number, b: number, color: string): void {

            crc2.beginPath();
            crc2.arc(x, y, rad, a, b);
            crc2.fillStyle = color;
            crc2.fill();

        }


        function animate(): void {

            crc2.putImageData(Hintergrund, 0, 0);

            
            for (let i: number = 0; i < arrayWolkeX.length; i++) {

                arrayWolkeX[i] += 1;
                Wolke(arrayWolkeX[i], arrayWolkeY[i]);

                if (arrayWolkeX[i] > 800) {
                    arrayWolkeX[i] = 0;
                }
            }


            //Skifahrer    
            arraySkifahrerX[0] += 2;
            arraySkifahrerY[0] += 1;

            Skifahrer(arraySkifahrerX[0], arraySkifahrerY[0]);

            if (arraySkifahrerX[0] > 800) {
                arraySkifahrerX[0] = 0;
                arraySkifahrerY[0] = 150;
            }

            arraySkifahrerX[1] += 4;
            arraySkifahrerY[1] += 2;

            Skifahrer(arraySkifahrerX[1], arraySkifahrerY[1]);

            if (arraySkifahrerX[1] > 800) {
                arraySkifahrerX[1] = -50;
                arraySkifahrerY[1] = 200;
            }


            //Schnee
            for (let i: number = 0; i < arraySchneeY.length; i++) {

                arraySchneeY[i] += 1;
                Schnee(arraySchneeX[i], arraySchneeY[i], 1.5, 0, 1.5 * Math.PI, "#ffffff");

                if (arraySchneeY[i] > 600) {
                    arraySchneeY[i] = 0;
                }
            }

            window.setTimeout(animate, 10);
        }

    }

}


 
