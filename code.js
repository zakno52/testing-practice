export function capitalize(str) {
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return '';
  }
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
};

export function caesarCipher(str, num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letters = [];
  let results = [];

  for (let i = 0; i < 26 + num; i++) {
    letters.push(alphabet[i % 26]);
  }

  for (let index = 0; index < str.length; index++) {
    let indexOfTarget = letters.indexOf(str[index]);
    let newLetter = letters[parseInt(indexOfTarget) + num];
    results.push(newLetter);
  }

  return results.join('');
}
