export {};

const first = () => {
  const message = 'TEST';
  message.toLowerCase(); // スペルミスでもエラーになる
  message(); // Functionではないことが認識されている
};

first();

const second = () => {
  const calculate = (arg1: number, arg2: number) => {
    return arg1 + arg2;
  };

  console.log(calculate(1, 2)); // 3
  console.log(calculate(1, 'a')); // ts(2345)

  const convertToLowerCase = (message: string) => {
    return message.toLowerCase();
  };

  console.log(convertToLowerCase('UPPERCASE')); // uppercase
  console.log(convertToLowerCase(123)); // ts(2345)
};

second();
