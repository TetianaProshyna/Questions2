const arr1 = new Array(1, 0, 2);
const arr2 = new Array(4, 2, 0);
const arr = arr2.concat(arr1);
console.log(arr[arr[2]]);

// Варианты ответов:
// 1 - 2;
// 2 - 4;
// 3 - 0;
// 4 - 1;
