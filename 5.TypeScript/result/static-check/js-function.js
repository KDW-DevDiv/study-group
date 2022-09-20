export {};

// ハンズオン 1
const first = () => {
  const message = 'TEST';
  message.toLowerCase();
  message();
};

first();

// ハンズオン 2
const second = () => {
  const calculate = (arg1, arg2) => {
    return arg1 + arg2;
  };

  console.log(calculate(1, 2)); // 3
  console.log(calculate(1, 'a')); // 1a

  const convertToLowerCase = (message) => {
    return message.toLowerCase();
  };

  console.log(convertToLowerCase('UPPERCASE')); // uppercase
  console.log(convertToLowerCase(123)); // TypeError
};

second();
