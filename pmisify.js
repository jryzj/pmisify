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