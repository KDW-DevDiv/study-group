# TypeScript

TypeScript は、型に関する文法を持った JavaScript のこと。

TypeScript により、コーディング時に型を確定させることができるため、Runtime エラーを防ぐだけでなく、メソッドの予測提案なども可能となり、開発効率のアップなどにもつながる。

<br/>

## 文法(Syntax)

コードリーディングで必要最低限の内容を記載。

- Type Annotation(変数)

  ":"の後に型を付ける。":"が出てきたら型に関する内容だと理解すればよい。

```
let message: string = "Hello World"

// ほとんどの場合、付けなくてもTypeScriptが推測してくれるので、無くてもよい。
let message = "Hello World"

// 配列
let numbers: number[] = [2,3,4]

// 以下でもOK
let numbers = [2,3,4]

// Object型
const jsObj:{id: number, content: string} = {id: 123, content: "test"}

// 以下でもOK
const jsObj = {id: 123, content: "test"}

```

- Type Annotation(Function)

  パラメータと戻り値の型を指定する。

```
function greet(message: string): string{
  return message;
}

greet("Hello World");
```

- Type Annotation(Object 型)

  JavaScript には、Object 型という Key-Value を格納できる型がある。それを利用して名前付き引数を設定することもできる。"?"を与えると、Optional となる。

```
function printName(obj: {first: string, last?: string}) {
  console.log(`My name is ${first} ${last}`)
}

// 呼び元
printName({first: "Taro", last: "Tanaka"}) // OK
printName() // Error
printName({first: "Taro"}) // OK
printName({last: "Tanaka"}) // Error
```

- Union Types

```
let numStr: number | string = "2"
numStr = 2
```

- Type Alias と Interface
  型の再利用性を高めるために、"type"と"interface"を宣言できる。どちらもほぼ効果は同じだが、interface は宣言後にも、field を追加できるが、type はできなという違いがある。

type

```
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
```

interface

```
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
```

- Enum

```
enum Setting{
  inValid = 0,
  valid = 1
}
```

- Literal Types

  文字列と数字を指定した型宣言も可能。

```
let trafficLight: 'blue' | 'red' | 'yellow';
trafficLight = 'red'; // OK
trafficLight = 'green'; // Error

let boundary: 1 | 0 | -1;
boundary = 1; // OK
boundary = 2; //Error
```

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

<br/>

## 静的チェック

JS は動的な型定義で、Runtime で型が確定する。そのため、静的なチェックが難しく、潜在バグへの懸念が払拭しきれないという面がある。  
(※ESLint などの静的チェックツールを細かくカスタマイズすれば不可能ではない。)

例えば以下のコードは、message という変数の状態により振る舞いが確定するが、型定義が存在しない状態では、コーディング時にはエラーにならず、Runtime で初めてエラーが顕在化する。

```
message.toLowerCase();

message();
```

以下の懸念がコーディング時に常に存在することになる。

1. message は toLowerCase というプロパティを持っているのか。

2. 持っていたとして、メソッドとして呼ぶことはできるのか。

3. message はメソッドとして呼ぶことは可能なのか。

4. 上記が全て解決したとして、両方から返される値はどのようなものか。

<br/>

仮に message に String 型が格納された場合、Function ではないので、Runtime 時に message()でエラーとなる。何度も言うが、JS のみでは、"コーディング"時にはエラーは検知できない。

```
const message = "Hello World!";

message.toLowerCase();

message();
```

TypeScript では、"コーディング"時にエラーが表示され、動作させずとも未然にエラーを防ぐことができる。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

<br/>

## プロパティチェックと提案機能

型チェックの中には、プロパティチェックも含まれており、JS ではエラーとならない処理に関してもエラーとして拾い、未然に予期せぬ動作を防ぐことができる。

```
// JS
// Object型(key-value pair)
const obj = {height:10, width:20}
console.log(obj.weight) // undefined -> エラーではない

// TS
// Object型(key-value pair)
const obj = {height:10, width:20}
console.log(obj.weight) // プロパティエラー weightがtype {height:number, width:number}に存在しない
```

変数に存在するプロパティを正確に把握しているため、その変数が持つプロパティの提案やタイプミスも防いでくれる。

```
// JS
const str = 'message'
message.toLowercase() // エラーにならない。本来はtoLower"C"ase

// TS
const str = 'message'
message.toLowercase() // プロパティエラー toLowercaseはtype stringに存在しない。更に正しいスペルを教えてくれる。
```

## TSC(TypeScript Compiler)

TypeScript コンパイラを通し、型関連の文法は除去され、ピュアな JS となり、従来の JS が動作する Runtime 環境で問題なく動作する。

<br/>

👨🏽‍💻 ハンズオン 👨🏽‍💻

1.compile/ts-compile.ts の内容をコピーする

2.コンパイルを行う

```
npx tsc ts-compile.ts
```

3.ts-compile.js を確認
型関連の情報が除去されていることが分かる。

4.JS を動作させる

```
node ts-compile.js
```

<br/>

## React + TypeScript PJ

1-4 回目の勉強会では、ピュア JS で React を組んできた。TypeScript テンプレートで PJ を組む方法は以下。

```
yarn create react-app [Project Name] --template typescript
or
npx create-react-app [Project Name] --template typescript
```
