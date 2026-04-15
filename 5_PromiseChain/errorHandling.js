const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const res = fetch();
    if (res) {
      resolve(2);
    } else {
      reject("oops");
    }
  }, 3000);
});
// returns the new promise object
p.then((v) => {
  console.log(v);
  return v + "A"; //is similar to resolve(v+"A")
})
  .then((v) => {
    console.log(v);
    return v + "B";
  })
  .then((v) => {
    console.log(v);
    throw v + "C"; // throw the exception which is similar to reject(v+"C")
  })
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log(err);
  });
