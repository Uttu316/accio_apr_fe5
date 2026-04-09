//polyfill forEach

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let array = this;

    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  };
}

let arr = ["A", "B", "C", "D", "E"];

arr.forEach((item, index, array) => {
  console.log(item);
});
