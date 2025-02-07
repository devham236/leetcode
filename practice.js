// check if a string is a palindrome
// a palindrome is a word that is the same forwards and backwards
// for example 'racecar', 'madam' or 'level'
// one way to check if a string is a palindrome, is to go through the string from behind, add each character to a new string and then compare the new string with the original string
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

// check if arr contains two numbers that sum up to target
function twoSumTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum == target) return true;
    if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

// check if str1 is a subsequence of another str2
// use while loop which runs while one pointer is lesser str1.length and second pointer is lesser than str2.length
// only increase first pointer if there is a match in characters
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] == str2[j]) {
      i++;
    }
    j++;
  }

  return i == str1.length;
}

//reverse a string
function reverseString(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let tmp = arr[left];

    arr[left++] = arr[right];
    arr[right--] = tmp;
  }

  return arr;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
