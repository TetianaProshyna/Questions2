console.log('1');
setTimeout(function () {
  console.log('2');
}, 3000);
console.log('3');
setTimeout(function () {
  console.log('4');
}, 1000);

// Варианты ответов:
// 1 - 4321;
// 2 - 1234;
// 3 - 1342;
// 4 - 2134;
