// class HumanMaker{
//     age=0;
//     constructor(public a:string){//i had setted default value for age is 0
//     }
// }
// new HumanMaker("Harsh");
class Music {
    constructor(name, artist, thumbnail = "something.jpg", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}
let m1 = new Music("Invincible", "Moosewala", "moosetape.jpg", 1200, false);
// export {};
//# sourceMappingURL=constructor.js.map