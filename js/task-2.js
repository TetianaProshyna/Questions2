const arr = [2, 3, 5, 8];
let str = '';
arr.forEach(x => {
  str += x % 3;
});
console.log(str);

// Варианты ответов:
// 1 - 6;
// 2 - 20;
// 3 - 2022;
// 4 - 2025;
