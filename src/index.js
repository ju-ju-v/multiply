module.exports = function multiply(first, second) {
  let first_num = BigInt(first);
  let second_num = BigInt(second);
  let mult = BigInt(first_num * second_num);

  return mult.toString();
}
