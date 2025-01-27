// returns true if a string is a palindrome
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  // condition ensures that left and right dont meet (odd length strings) or cross (even length strings) each other
  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  //only gets reached if the entire string is checked without finding a mismatch
  return true;
}

// checks if arr contains two numbers that sum up to target, checks at each iteration, if the sum is equal, greater or lesser than target and returns true, decrements right or increments left.
// only works with sorted array
function twoSumTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum == target) return true;
    if (currSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.log(twoSumTarget([1, 2, 4, 6, 8, 9, 14, 15], 13));
