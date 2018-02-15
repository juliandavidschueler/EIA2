var Aufgabe06;
(function (Aufgabe06) {
    class Wolken extends Aufgabe06.MovingShape {
        constructor(x, y) {
            super(x, y);
        }
        move() {
            this.x += Math.random() + 0.5;
            this.y;
            if (this.x > 800) {
                this.x = 0;
            }
        }
        draw() {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FAFAFA";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x + 15, this.y + 8, 20, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FAFAFA";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x, this.y + 5, 20, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FAFAFA";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x - 20, this.y + 8, 20, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FAFAFA";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FAFAFA";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x + 70, this.y + 8, 20, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FAFAFA";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x + 50, this.y + 15, 20, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FAFAFA";
            Aufgabe06.crc2.fill();
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x + 30, this.y + 8, 20, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FAFAFA";
            Aufgabe06.crc2.fill();
        }
    }
    Aufgabe06.Wolken = Wolken;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=Wolke.js.map