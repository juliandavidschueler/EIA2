var L05_Class;
(function (L05_Class) {
    class Skifahrer {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        update() {
            this.move();
            this.draw();
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
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = this.jacke;
            L05_Class.crc2.fillRect(this.x, this.y - 5, 7, 25);
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#000000";
            L05_Class.crc2.fillRect(this.x - 6, this.y + 20, 30, 3);
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = this.hose;
            L05_Class.crc2.fillRect(this.x, this.y - 5, 7, 10);
            L05_Class.crc2.beginPath();
            L05_Class.crc2.fillStyle = "#000000";
            L05_Class.crc2.arc(this.x + 5, this.y - 10, 7, 0, 2 * Math.PI);
            L05_Class.crc2.fill();
        }
        setRandomStyle() {
            this.jacke = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.hose = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    L05_Class.Skifahrer = Skifahrer;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=Skifahrer.js.map