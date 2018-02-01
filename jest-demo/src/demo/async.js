const users = {
  4: { name: "Mark" },
  5: { name: "Paul" },
};

const action = {
  getCallBack(userId, callback) {
    setTimeout(() => {
      callback(users[userId]);
    }, 400);
  },
  getPromise(userId,callback) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          users[userId]
            ? resolve(users[userId])
            : reject({
                error: "error"
              })
      );
    });
  }
};
export default action;
