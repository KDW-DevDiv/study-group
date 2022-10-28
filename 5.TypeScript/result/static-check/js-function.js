export {};

// 1
const first = () => {
  const message = 123;
  message.toLowerCase(); // エラーではない
  message(); // エラーではない
};

first();

// 2
const second = () => {
  // Object型(key-value pair)
  const obj = { height: 10, width: 20 };
  console.log(obj.weight); // undefined -> エラーではない

  const convertToLowerCase = (message) => {
    return message.toLowerCase();
  };

  console.log(convertToLowerCase('UPPERCASE')); // uppercase
  console.log(convertToLowerCase(123)); // エラーではない
};

second();
