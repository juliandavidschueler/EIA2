var Aufgabe06;
(function (Aufgabe06) {
    class Skifahrer extends Aufgabe06.MovingShape {
        constructor(x, y) {
            super(x, y);
        }
        move() {
            this.x += Math.random() + 2;
            this.y += Math.random() + 1;
            if (this.x > 800) {
                this.x = 0;
                this.y = 100;
            }
        }
        draw() {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.fillStyle = this.jacke;
            Aufgabe06.crc2.fillRect(this.x, this.y - 5, 7, 25);
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.fillStyle = "#000000";
            Aufgabe06.crc2.fillRect(this.x - 6, this.y + 20, 30, 3);
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.fillStyle = this.hose;
            Aufgabe06.crc2.fillRect(this.x, this.y - 5, 7, 10);
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.fillStyle = "#000000";
            Aufgabe06.crc2.arc(this.x + 5, this.y - 10, 7, 0, 2 * Math.PI);
            Aufgabe06.crc2.fill();
        }
    }
    Aufgabe06.Skifahrer = Skifahrer;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=Skifahrer.js.map