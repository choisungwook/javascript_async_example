function sleep(sec) {
  let start = Date.now(), now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}

function Delay(_function, delay) {
  setTimeout(_function, delay);
}

console.log("동기 1");
console.log("동기 2");
Delay(() => console.log("비동기 3 - 3초"), 300);
console.log("동기 4");
console.log("동기 5");

sleep(5);
console.log("동기 문자열과 비동기 문자열이 모두 출력되야 함");
