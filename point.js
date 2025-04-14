class Point {
    _x; _y;
    constructor(x, y) {

        this._x = x;
        this._y = y;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
}
export class WheelPoint extends Point {
    constructor(x, y) {
        super(x, y);
    }
}
export class ConnectionPoint extends Point{
    isLocked; 
    constructor(x, y) {
        super(x, y);
        this.isLocked = false;
    }
}
