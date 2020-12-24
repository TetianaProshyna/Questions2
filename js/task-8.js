let arr = [5, 4, 3, 2, 1];
arr.reverse();
arr = arr.map(function (elem) {
  elem *= 2;
  return elem;
});
console.log(arr[2]);
