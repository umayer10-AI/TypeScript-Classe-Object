"use strict";
// class BottleMaker {
//     constructor(public name: string, public price: number) {
Object.defineProperty(exports, "__esModule", { value: true });
//     }
// }
// const d1 = new BottleMaker("Milton",1200)
class BottleMaker {
    name;
    age;
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
}
const b1 = new BottleMaker("Umayer",21);
console.log(b1)
//# sourceMappingURL=app.js.map