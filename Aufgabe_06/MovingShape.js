var Aufgabe06;
(function (Aufgabe06) {
    class MovingShape {
        constructor(x, y) {
            this.setRandomStyle();
            this.x = x;
            this.y = y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() { }
        draw() { }
        setRandomStyle() {
            this.jacke = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.hose = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    Aufgabe06.MovingShape = MovingShape;
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=MovingShape.js.map