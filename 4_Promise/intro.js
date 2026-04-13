//pending
const p = new Promise((resolve, reject) => {
  if (2 < 4) {
    console.log("A");
    reject("Oops"); //async
    console.log("B");
  } else {
    resolve("Hello"); // async
  }
});

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("error", err);
});
