//polyfill of myIncludes
Array.prototype.myIncludes = function (target) {
  let array = this; // current array

  for (let i = 0; i < array.length; i++) {
    let curr = array[i];

    if (typeof curr === "string") {
      curr = curr.toLowerCase();
      target = target.toLowerCase();
    }

    if (target == curr) {
      return true;
    }
  }
  return false;
};

let arr = ["A", "B", "C", "D", "E"];

const isPresent = arr.myIncludes("D");

console.log(isPresent);
