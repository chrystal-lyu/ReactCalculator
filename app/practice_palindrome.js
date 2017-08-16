const palindrome = [];

function findPalindrome(str) {
  if(str === str.split('').reverse().join('') && str.length > 1) {
    return palindrome.push(str);
  } 
}

function findLongestPalindrome(str) {
  const result = [];
  for(let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length + 1; j++) {
      if(j > i) {
        result.push(str.substr(i, j - i));
      }
    }
  }
  result.forEach((string) => {
    findPalindrome(string);
  })
  console.log(palindrome);
  console.log(palindrome.sort((a, b) => b.length - a.length)[0]);
}

findLongestPalindrome('eddiehannahracecar');