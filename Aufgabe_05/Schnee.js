var L05_Class;
(function (L05_Class) {
    class Schneeflocken {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += Math.random();
            if (this.y > 600) {
                this.y = 0;
            }
        }
        draw() {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FFFFFF";
            L05_Class.crc2.fill();
        }
    }
    L05_Class.Schneeflocken = Schneeflocken;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=Schnee.js.map