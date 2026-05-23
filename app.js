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
// class Hello {
//     constructor(public brand:string,public price:number,public color:string,public meterial:string){
//     }
// }
// const b1 = new Hello("Toyota",2026,'Black',"metal")
class Music {
    name;
    artist;
    thumbnail;
    length;
    free;
    constructor(name, artist, thumbnail = "p.jpg", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "Umayer.png";
        }
    }
}
const b = new Music("Umayer", "Boss", "", 21, true);
console.log(b)
console.log(b);

//# sourceMappingURL=app.js.map