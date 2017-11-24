namespace Aufgabe06 {

    export class Schneeflocken extends MovingShape {

        constructor(x: number, y: number) {
            super(x, y);
        }

        move(): void {
            this.y += Math.random();

            if (this.y > 600) {
                this.y = 0;
            }
        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();

        }

    }
}