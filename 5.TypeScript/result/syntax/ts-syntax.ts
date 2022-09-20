const typeAnnotationOnVariables = () => {
  let message: string = 'Hello World';

  // ほとんどの場合、付けなくてもTypeScriptが推測してくれるので、無くてもよい。
  let message2 = 'Hello World';

  // 配列
  let numbers: number[] = [2, 3, 4];

  // 以下でもOK
  let numbers2 = [2, 3, 4];

  // Object型
  const jsObj: { id: number; content: string } = { id: 123, content: 'test' };

  // 以下でもOK
  const jsObj2 = { id: 123, content: 'test' };
};

const typeAnnotationOnFunction = () => {
  function greet(message: string): string {
    return message;
  }
  greet('Hello World');
};

const typeAnnotationOnObject = () => {
  function printName(obj: { first: string; last?: string }) {
    console.log(`My name is ${first} ${last}`);
  }

  // 呼び元
  printName({ first: 'Taro', last: 'Tanaka' }); // OK
  printName(); // Error
  printName({ first: 'Taro' }); // OK
  printName({ last: 'Tanaka' }); // Error
};

const unionTypes = () => {
  let numStr: number | string = '2';
  numStr = 2;
};

const typeDeclaretion = () => {
  type Location = {
    x: number;
    y: number;
  };

  const myLocation: Location = { x: 5, y: 8 };
  const yourLocation: Location = { x: 9, y: 4 };

  function setPlace(location: Location) {
    // 処理
  }

  setPlace({ x: 4, y: 9 }); // OK
  setPlace({ x: 4 }); // Error
};

const interfaceDeclaretion = () => {
  interface Location {
    x: number;
    y: number;
  }

  const myLocation: Location = { x: 5, y: 8 };
  const yourLocation: Location = { x: 9, y: 4 };

  function setPlace(location: Location) {
    // 処理
  }

  setPlace({ x: 4, y: 9 }); // OK
  setPlace({ x: 4 }); // Error
};

const literalTyps = () => {
  let trafficLight: 'blue' | 'red' | 'yellow';
  trafficLight = 'red'; // OK
  trafficLight = 'green'; // Error

  let boundary: 1 | 0 | -1;
  boundary = 1; // OK
  boundary = 2; //Error
};
