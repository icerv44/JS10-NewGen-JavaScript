let filterOutOdds = (...val) => {
  let even = [];
  //console.log(val);
  for (let x of val) {
    //console.log(x);
    if (x % 2 === 0) {
      //console.log(val);
      even.push(x);
    }
  }
  return even;
};

let chk = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterOutOdds(...chk));
