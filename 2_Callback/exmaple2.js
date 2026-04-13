console.log("A");
function getData(userId, onSuccess, onFailure) {
  console.log("B");
  if (userId === "abc") {
    const data = {
      name: "ABC_XYZ",
      id: "abc",
      age: 22,
      city: "Delhi",
    };
    console.log("C");
    onSuccess(data);
    console.log("D");
  } else {
    onFailure("no user found");
    console.log("E");
  }
  console.log("F");
}
console.log("G");
getData(
  "xyz",
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  },
);
console.log("H");
