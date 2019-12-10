function reverse(str) {
  // turn string into an array
  const arr = str.split("");
  // call reverse method on the array
  arr.reverse();
  // join the array back into a string
  arr.join("");
  // return the result
  return arr;
}

function reverse1(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
