var L05_Class;
(function (L05_Class) {
    class Wolken {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += Math.random() + 0.5;
            this.y;
            if (this.x > 800) {
                this.x = 0;
            }
        }
        draw() {
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FAFAFA";
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x + 15, this.y + 8, 20, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FAFAFA";
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x, this.y + 5, 20, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FAFAFA";
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x - 20, this.y + 8, 20, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FAFAFA";
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FAFAFA";
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x + 70, this.y + 8, 20, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FAFAFA";
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x + 50, this.y + 15, 20, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FAFAFA";
            L05_Class.crc2.fill();
            L05_Class.crc2.beginPath();
            L05_Class.crc2.arc(this.x + 30, this.y + 8, 20, 0, 2 * Math.PI);
            L05_Class.crc2.fillStyle = "#FAFAFA";
            L05_Class.crc2.fill();
        }
    }
    L05_Class.Wolken = Wolken;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=Wolke.js.map