const isPalindrome = (text) => {
  const isAlphabet = /^[a-zA-Z]+$/;
  const textArray = text.split("");
  const filteredArray = [];
  textArray.forEach((item) => {
    if (isAlphabet.test(item)) {
      filteredArray.push(item);
    }
  });
  const reverseOfFilteredArray = [...filteredArray].reverse();
  const baseText = filteredArray.join("").toUpperCase();
  const reverseText = reverseOfFilteredArray.join("").toUpperCase();

  if (baseText === reverseText) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(`("A man, a plan, a canal: Panama")`));
// The expected result would be "true".
