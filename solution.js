// 1:
function multiplyNum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    for (let i = 1; i <= 5; i++)
      //     for (let i = 1; i <= b; i++) we can add b also

      console.log(a ** i);
  }
}

multiplyNum(3, 5);
// we can change the place of b now for second part
function multiplyNum2(a, b) {
  if (typeof a === "number" || typeof b === "number") {
    for (let i = 1; i < 9; i++) console.log(a ** i);
  }
}

multiplyNum2(2, 8);
//console.log(3 ** 1, 3 ** 2, 3 ** 3, 3 ** 4, 3 ** 5);
// 2:
let fruit = "Apple";
function printFavoriteFruit() {
  fruit = "chery";
  console.log("My favorite fruit is:", fruit);
}
printFavoriteFruit();
// function printFavoriteFruit(fruit) {
//   console.log("My favorite fruit is:", fruit);
// }
// printFavoriteFruit(fruit);

// 3:
function exponent(a, b) {
  let result = a ** b;
  console.log(result);
}
exponent(2, 2);
// i
