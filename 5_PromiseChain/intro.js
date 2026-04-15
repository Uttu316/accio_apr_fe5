const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey");
  }, 3000);
});
// returns the new promise object
const p2 = p.then((v) => {
  console.log(v);
  return v + "A"; //is similar to resolve(v+"A")
});

const p3 = p2.then((v) => {
  console.log(v);
  return v + "B";
});
const p4 = p3.then((v) => {
  console.log(v);
  return v + "C";
});
p4.then((v) => {
  console.log(v);
});
