const dt = new Date();

// console.log(dt.toString());

// let d = dt.getDate()
// let m = dt.getMonth() + 1
// let a = dt.getFullYear()
// console.log(`${d}:${m}:${a}`);

// let h = dt.getHours();
// let mt = dt.getMinutes();
// let s = dt.getSeconds();
// console.log(`${h}:${mt}:${s}`);

dt.setHours(dt.getHours() + 4)

let h = dt.getHours();
let mt = dt.getMinutes();
let s = dt.getSeconds();



console.log(`${h}:${mt}:${s}`);