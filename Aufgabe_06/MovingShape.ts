namespace Aufgabe06 {

    export class MovingShape {
        x: number;
        y: number;
        jacke: string;
        hose: string;

        constructor(x: number, y: number) {
            this.setRandomStyle();
            this.x = x;
            this.y = y;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {}
        
        draw(): void{}
        
        setRandomStyle(): void {
            
            this.jacke = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.hose = "hsl(" + Math.random() * 360 + ", 100%, 50%)";

        }

    }
}