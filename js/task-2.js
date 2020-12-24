const arr = [2, 3, 5, 8];
let str = '';
arr.forEach(x => {
  str += x % 3;
});
console.log(str);
