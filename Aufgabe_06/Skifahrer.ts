namespace Aufgabe06 {

    export class Skifahrer extends MovingShape {

        constructor(x: number, y: number) {
            super(x, y);
        }     

        move(): void {
            this.x += Math.random() + 2;
            this.y += Math.random() + 1;

            if (this.x > 800) {
                this.x = 0;
                this.y = 100;
            }
        }

        draw(): void { 
            
            crc2.beginPath();
            crc2.fillStyle = this.jacke;
            crc2.fillRect(this.x, this.y - 5, 7, 25);

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x - 6, this.y + 20, 30, 3);

            crc2.beginPath();
            crc2.fillStyle = this.hose;
            crc2.fillRect(this.x, this.y - 5, 7, 10);

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 5, this.y - 10, 7, 0, 2 * Math.PI);
            crc2.fill();
            
        }

        
    }
}