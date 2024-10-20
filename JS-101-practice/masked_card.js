/*

console.log(maskify('5512103073210694')); 
// 5###########0694
console.log(maskify('4556-3646-0793-5616')); 
// 4###-####-####-5616
console.log(maskify('')); 
// ''
console.log(maskify('paypalisgreat')); 
// paypalisgreat

*/

function maskify(cardNumber) {
  if (typeof cardNumber === "number") {
    cardNumber = cardNumber.toString();
  }

  if (cardNumber.length < 6 || cardNumber.length === 0) {
    return cardNumber;
  }

  const firstChar = cardNumber[0];
  const lastFourNumber = cardNumber.slice(-4);

  let maskedSection = "";

  for (let i = 1; i < cardNumber.length - 4; i++) {
    const char = cardNumber[i];
    maskedSection += isNaN(parseInt(char)) ? char : "#";
  }

  return maskedSection + lastFourNumber;
}

console.log(maskify("4556-3646-0793-5616"));
console.log(maskify("4556364607935616"));
