let x = 125;
let sum = 0;
while (x > 0) {
  sum += x % 10;
  x = (x - (x % 10)) / 10;
}
console.log(sum);

// Варианты ответов:
// 1 - 6;
// 2 - 5;
// 3 - 7;
// 4 - 8;
