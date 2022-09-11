
function Delay(_function, delay) {
  setTimeout(_function, delay);
}

console.log("동기 1");
console.log("동기 2");
Delay(() => console.log("비동기 3 - 3초"), 300);
console.log("동기 4");
console.log("동기 5");
