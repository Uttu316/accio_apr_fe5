//polyfill map

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let array = this;
    let output = [];
    for (let i = 0; i < array.length; i++) {
      let value = callback(array[i], i, array);
      output.push(value);
    }
    return output;
  };
}

let arr = ["A", "B", "C", "D", "E"];

let newArray = arr.map((item, index, array) => {
  return item + "*";
});
console.log(newArray);
