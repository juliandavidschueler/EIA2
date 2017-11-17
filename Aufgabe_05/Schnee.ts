namespace L05_Class {

    export class Schneeflocken {
        x: number;
        y: number;
        


        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        update(): void {
            this.move();
            this.draw();
            
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