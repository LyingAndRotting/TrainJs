import { Train } from "./train.js";
import readline from 'node:readline';
class Detector {
    #train;
    #currentIndex = 0;
    #wheel = 0;
    constructor() {
        this.#askDirection();
    }

    #askDirection() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(
            "Введите направление движения поезда:\nR(r) - Вправо\nL(l) - Влево\n",
            (direction) => {
                this.#train = new Train((Math.ceil(Math.random() * 100)), direction, 1000);
                console.log(this.#train.getLength())
                rl.close();
                this.#startDetection();
            }
        );
    }
    
    #startDetection() {
        console.log("Детектор активирован. Нажмите Enter, чтобы обнаружить вагон...");
        const interval = setInterval(() => {
            if (this.#wheel == 4) {
                this.#wheel = 0;
                this.#currentIndex++;
            }
            this.#wheel++;
        }, 250);
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.on("line", () => {
            if (this.#currentIndex < this.#train.getLength()) {
                const wagon = this.#train.getWagon(this.#currentIndex);
                console.log(`Обнаружен вагон №${wagon.getId()}`);
                if (this.#train.getDirection() === "l") {
                    if (this.#wheel > 2) {
                        console.log("Передняя часть вагона " + this.#wheel);
                    } else {
                        console.log("Задняя часть вагона " + this.#wheel)
                    }
                } else {
                    if (this.#wheel <= 2) {
                        console.log("Передняя часть вагона " + this.#wheel);
                    } else {
                        console.log("Задняя часть вагона " + this.#wheel)
                    }
                }
                console.log(wagon.getWheelById(this.#wheel) ? "Колесо на месте" : "Колеса нет")
                
            } else {
                console.log("Поезд проехал полностью!");
                clearInterval(interval);
                rl.close();
            }
        });
    }
}
new Detector()
