export {};

// 1
const first = () => {
  const message = 123;
  message.toLowerCase(); // number型に存在しないことが認識されている
  message(); // Functionではないことが認識されている
};

first();

// 2
const second = () => {
  // Object型(key-value pair)
  const obj = { height: 10, width: 20 };
  console.log(obj.weight); // プロパティエラー weightがtype {height:number, width:number}に存在しない

  // 文字列を小文字に変換する
  const convertToLowerCase = (message: string) => {
    return message.toLowerCase();
  };

  console.log(convertToLowerCase('UPPERCASE')); // uppercase
  console.log(convertToLowerCase(123)); // ts(2345)
};

second();
