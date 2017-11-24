namespace Aufgabe06 {

    export class Wolken extends MovingShape {

        constructor(x: number, y: number) {
            super(x, y);
        }

        move(): void {
            this.x += Math.random() +0.5;
            this.y ;

            if (this.x > 800) {
                this.x = 0;
            }
        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAFAFA";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 15, this.y + 8, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAFAFA";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y + 5, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAFAFA";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 20, this.y + 8, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAFAFA";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAFAFA";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 70, this.y + 8, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAFAFA";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 50, this.y + 15, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAFAFA";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y + 8, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#FAFAFA";
            crc2.fill();

        }

    }
}