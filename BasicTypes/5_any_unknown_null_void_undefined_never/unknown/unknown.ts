let a:unknown;
a=12;
a="harsh";

if(typeof a === "string"){
    a.toUpperCase();
}
// only works if we put that in this condition otherwise throws error