const isValidLength = (string, maxLength) => string.length <= maxLength;

isValidLength();

const isPalindrome = (string) => {
  const normalized = string.replaceAll(' ', '').toUpperCase();
  let reversed = '';

  for(let i = normalized.length - 1; i >= 0 ; i--){
    reversed += normalized[i];
  }

  return reversed === normalized;
};

isPalindrome();

