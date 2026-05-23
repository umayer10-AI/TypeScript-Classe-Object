// class BottleMaker {
//     constructor(public name: string, public price: number) {

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
    constructor(public name: string, public artist: string, public thumbnail: string="p.jpg",public length:number, public free:boolean){
        if(!thumbnail){
            this.thumbnail = "Umayer.png"
        }
    }
}
const b = new Music("Umayer","Boss","",21,true)