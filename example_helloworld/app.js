
function printHelloworld() {
  console.log("hello world 1");
}

function printHelloworld2() {
  console.log("hello world 2");
  printHelloworld()
}

printHelloworld()
printHelloworld2()
