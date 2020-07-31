const fs = require("fs");

function pmsify(fun) {
  return function (...arg) {
    return new Promise((resolve, reject) => {
      arg.length = fun.length - 1; //last parameter is callback function.
      fun(...arg, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}

let fr = pmsify(fs.readFile);

fr("./1.txt")
  .then((data) => {
    console.log("step1");
    console.log(data);
  })
  .then(() => {
    return fr("./2.txt", "utf8");
  })
  .then((data) => {
    console.log("step2");
    console.log(data);
  })
  .then(() => {
    return fr("./3.txt", "utf8");
  })
  .then((data) => {
    console.log("step3");
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


