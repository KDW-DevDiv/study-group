interface Message {
  id: number;
  name: string;
  content: string;
}

const message: Message = { id: 1, name: 'taro', content: 'Hello World' };
console.log(message);
