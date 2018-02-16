namespace Abschlussaufgabe {

    export class SnakeKopf {
        snakeKopf: number[] = [];
        n : number = 2;

        constructor(x: number, y: number) {
            this.snakeKopf[0] = x;
            this.snakeKopf[1]=y;
        }

        update(): void {
            this.move();
            
        }

        move(): void {
             if (this.n == 0) {
            this.snakeKopf[1]--;
            if (this.snakeKopf[1] < 0) {
                this.snakeKopf[1] = 24;
            }
        }
        if (this.n == 1) {
            this.snakeKopf[1]++;
            if (this.snakeKopf[1] > 24) {
                this.snakeKopf[1] = 0;
            }
        }
        if (this.n == 2) {
            this.snakeKopf[0]++;
            if (this.snakeKopf[0] > 49) {
                this.snakeKopf[0] = 0;
            }
        }
        if (this.n == 3) {
            this.snakeKopf[0]--;
            if (this.snakeKopf[0] < 0) {
                this.snakeKopf[0] = 50;
            }
        }

            }
        



    }
}