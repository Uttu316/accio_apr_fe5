console.log("A");
function getData() {
  console.log("B");
  return new Promise((resolve, reject) => {
    console.log("C");
    const name = prompt("Enter your name");
    setTimeout(() => {
      if (name.includes("a")) {
        resolve(name);
      } else {
        reject("oops");
      }
      console.log("D");
    }, 3000);
    console.log("E");
  });
}
console.log("F");
getData()
  .then((v) => {
    console.log(v);
    return v + "A";
  })
  .then((v) => {
    return v + "B";
  })
  .then((v) => {
    throw v + "C";
  })
  .catch((err) => {
    console.log(err);
  });
console.log("G");
