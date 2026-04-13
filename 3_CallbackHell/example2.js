function getUser(username, onSuccess, onFailure) {
  setTimeout(() => {
    if (username === "abc") {
      onSuccess({
        name: "ABC_XYZ",
        id: 22121,
      });
    } else {
      onFailure("Oops");
    }
  }, 3000);
}

function getPost(userId, onSuccess, onFailure) {
  setTimeout(() => {
    if (userId) {
      onSuccess({
        caption: "travelling to goa",
        id: 989898,
      });
    } else {
      onFailure("Oops no post");
    }
  }, 3000);
}

function getComment(postId, onSuccess, onFailure) {
  setTimeout(() => {
    if (postId) {
      onSuccess({
        comment: "Cool!",
        id: 7878789,
      });
    } else {
      onFailure("Oops no comment");
    }
  }, 3000);
}

console.time("exe");
console.log("start");
getUser(
  "abc",
  (user) => {
    console.log(user);
    getPost(
      user.id,
      (post) => {
        console.log(post);
        getComment(
          post.id,
          (comment) => {
            console.log(comment);
            console.timeEnd("exe");
          },
          (err) => {
            console.log(err);
          },
        );
      },
      (err) => {
        console.log(err);
      },
    );
  },
  (err) => {
    console.log("erorr", err);
  },
);
