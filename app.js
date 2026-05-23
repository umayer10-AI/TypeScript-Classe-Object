"use strict";
// class BottleMaker {
//     constructor(public name: string, public price: number) {
Object.defineProperty(exports, "__esModule", { value: true });
//     }
// }
// const d1 = new BottleMaker("Milton",1200)
// class BottleMaker {
//     age = 0
//     constructor(public name: string){
//     }
// }
// const b1 = new BottleMaker("Umayer")
class Hello {
    brand;
    price;
    color;
    meterial;
    constructor(brand, price, color, meterial) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.meterial = meterial;
    }
}
const b1 = new Hello("Toyota", 2026, 'Black', "metal");
const b2 = new Hello("TATA", 2027, 'Yellow', "Gold");
const b3 = new Hello("Honda", 2028, 'Blue', "Cipper");
console.log(b1,b2,b3)
//# sourceMappingURL=app.js.map