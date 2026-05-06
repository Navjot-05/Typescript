"use strict";
// class HumanMaker{
//     age=0;
//     constructor(public a:string){//i had setted default value for age is 0
Object.defineProperty(exports, "__esModule", { value: true });
//     }
// }
// new HumanMaker("Harsh");
class Music {
    name;
    artist;
    thumbnail;
    length;
    free;
    constructor(name, artist, thumbnail = "something.jpg", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}
new Music("Invincible", "Moosewala", "moosetape.jpg", 1200, false);
//# sourceMappingURL=constructor.js.map