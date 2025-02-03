const getDigitSum = (num) => {
  const splittedNum = num
    .toString()
    .split("")
    .map((n) => parseInt(n));

  return splittedNum.reduce((acc, curr) => acc + curr, 0);
};

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const isPerfect = (num) => {
  if (num === 1) return false;

  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }

  return sum == num;
};

const getParity = (num) => (num % 2 === 0 ? "even" : "odd");

const isArmstrong = (num) => {
  const numStr = num.toString();
  const numLength = numStr.length;
  let sum = 0;

  for (let i = 0; i < numLength; i++) {
    sum += Math.pow(parseInt(numStr[i]), numLength);
  }

  return sum == num;
};

module.exports = { getDigitSum, isPrime, isPerfect, getParity, isArmstrong };
