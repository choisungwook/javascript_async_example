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

function getData(): TodoInfo {
  const URL: string = 'https://jsonplaceholder.typicode.com/todos/1';
  const ajax: XMLHttpRequest = new XMLHttpRequest();

  ajax.open('GET', URL, false);
  ajax.send()

  sleep(2);
  return JSON.parse(ajax.response);
}

const data: TodoInfo = getData()
console.log(data);
printDone();
