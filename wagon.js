
export class Wagon {  
    #wheels = {}; 
    #connectionPoints = []; 
    #id; 
    constructor(id, leftConnection = false, rightConnection = false) {
        this.#id = id;
        this.#wheels = [true, true, true, true];
        this.#connectionPoints = [
            { side: "left", detected: leftConnection },
            { side: "right", detected: rightConnection }
        ];
    }
    getWheelById(id) {
        return this.#wheels[id - 1];
    }
    getId() {
        return this.#id;
    }

    //     //if (isRight)
    //     points.sort((a, b) => parseFloat(a.getX()) - parseFloat(b.getX()))
    //     if (points.length < 6) {
    //         if (points[0].getY() < points[1].getY()) {
    //             this.#connectionPoints.push(points[0])
    //             if (points[-1].getY() < points[-2].getY()) this.#connectionPoints.push(points[-1])
    //             this.#wheelPoints.push(...points.slice(1, points.length)); 
    //         } else {
    //             this.#connectionPoints.push(points[points.length - 1]);
    //             this.#wheelPoints.push(...points.slice(0, points.length - 1)); 
    //         }
    //     } else {
    //         this.#connectionPoints.push(points[0],points[points.length - 1]);
    //         this.#wheelPoints.push(...points.slice(1, points.length - 1));
    //     }
    //     if (this.#connectionPoints.length === 1 ) {
    //         if (direction) {
    //             if (this.#connectionPoints[0].getX() > this.#wheelPoints[0].getX())  {
    //                 this.#position = Position.LAST;
    //             } 
    //             else {
    //                 this.#position = Position.FIRST;
    //             }
    //         } 
    //         else {
    //             if (this.#connectionPoints[0].getX() > this.#wheelPoints[0].getX())  {
    //                 this.#position = Position.FIRST;
    //             } 
    //             else {
    //                 this.#position = Position.LAST;
    //             }
    //         }
    //     }
    //     console.log(this.#connectionPoints);
    //     console.log(this.#wheelPoints);
    // }

    // getPointCount() {
    //     return this.#connectionPoints.length + this.#wheelPoints.length;
    // }

    // print() {
    //     let res = "Ваш вагон "
    //     switch(this.#position) {
    //         case Position.FIRST:
    //             res += "первый";
    //             break;
    //         case Position.MIDDLE:
    //             res += "в середине поезда";
    //             break;
    //         case Position.LAST:
    //             res += "последний"
    //     }
    //     console.log(res)
    // }
}