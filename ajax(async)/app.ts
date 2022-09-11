type TodoInfo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

function sleep(sec: number): void {
  let start = Date.now(), now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}

function printDone(): void {
  const rootContainer: HTMLElement | null = document.getElementById('root');

  if (!rootContainer)
    throw('root conatiner가 있는지 확인하세요');

  const randomValue = Math.floor(Math.random() * 1000);
  rootContainer.innerHTML = `
    <h1>Done-${randomValue}!</h1>
  `
}

function callback(): void {
  console.log("callback done");
}

function getData(): TodoInfo {
  const URL: string = 'https://jsonplaceholder.typicode.com/todos/1';
  const ajax: XMLHttpRequest = new XMLHttpRequest();

  ajax.open('GET', URL);
  ajax.addEventListener('load', callback);
  ajax.send()

  console.log("request done")
}

getData();
printDone();

// callback을 지연시키고 싶으면 주석을 해제하세요
// sleep(3);
