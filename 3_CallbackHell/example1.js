console.log("A");
function getData(userid, onSuccess, onFailure) {
  console.log("B");
  setTimeout(() => {
    if (userid == "abc") {
      const data = {
        id: "abc",
        name: "ABC_XYZ",
        age: 22,
      };
      onSuccess(data);
      console.log("C");
    } else {
      onFailure("Oops");
    }
    console.log("D");
  }, 3000);
  console.log("E");
}

console.log("F");
getData(
  "abc",
  (user) => {
    console.log(user);
    //getProfile()
    //getSettings()
  },
  (err) => {
    console.log(err);
  },
);
console.log("G");
