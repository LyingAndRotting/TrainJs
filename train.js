import { Wagon } from "./wagon.js";
export class Train {
    #wagons = [];
    #direction;
    #speed;
    constructor(length, direction = "R", speed = 1) {
        this.#direction = direction.toLowerCase();
        this.#speed = speed;
        for (let i = 0; i < length; i++) {
            if (this.#direction === 'r') {
                this.#wagons.push(new Wagon(i + 1, i < length - 1, i > 0));
            } 
            else if(this.#direction === "l") {
                this.#wagons.push(new Wagon(i + 1, i > 0, i < length - 1));
            }
            else {
                throw new Error("Укажите направление!");
            }
        }
    }
    getWagon(index) {
        return this.#wagons.at(index);
    }
    getLength() {
        return this.#wagons.length;
    }
    getSpeed() {
        return this.#speed;
    }
    getDirection() {
        return this.#direction;
    }
//     #getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     
//     getWagons() {
//         return this.#wagons;
//     }
//     print() {
//         let str = ""
//         for(let i = 0; i < this.#wagons.length; i++) {
//             str +=".".repeat(this.#wagons[i].getWheelCount());
//             if (!this.#wagons[i].isFinish()) {
//                 str += "—";
//             }
//         }
//         console.log(str)
//     }
}


