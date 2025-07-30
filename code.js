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
    if (!alphabet.includes(str[index].toLowerCase())) {
      results.push(str[index]);
      continue;
    }
    let indexOfTarget = letters.indexOf(str[index].toLowerCase());
    if (!indexOfTarget) {
      break;
    }
    let newLetter = letters[parseInt(indexOfTarget) + num];
    if (str[index] === str[index].toLowerCase()) {
      results.push(newLetter);
    } else {
      results.push(newLetter.toUpperCase());
    }
  }

  return results.join('');
}

export function analyzeArray(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let average = Math.floor(max / 2);
  let length = arr.length;

  let results = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return results;
}
