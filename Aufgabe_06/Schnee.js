var Aufgabe06;
(function (Aufgabe06) {
    class Schneeflocken extends Aufgabe06.MovingShape {
        constructor(x, y) {
            super(x, y);
        }
        move() {
            this.y += Math.random();
            if (this.y > 600) {
                this.y = 0;
            }
        }
        draw() {
            Aufgabe06.crc2.beginPath();
            Aufgabe06.crc2.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
            Aufgabe06.crc2.fillStyle = "#FFFFFF";
            Aufgabe06.crc2.fill();
        }
    }
    Aufgabe06.Schneeflocken = Schneeflocken;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=Schnee.js.map