const promise = new Promise((resolve, reject) => {
  let str1 = "Vasu";
  let str2 = "Vasu";
  if (str1 == str2) {
    resolve("Both the strings are same");
  } else {
    reject("Both the strings are different");
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));