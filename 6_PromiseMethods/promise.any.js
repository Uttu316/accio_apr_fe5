const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
}); //res A 3
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 2000);
}); //rej B 2
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 1500);
}); //res C 1.5

const p = Promise.any([p1, p3, p2]);

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("Error", err);
});
