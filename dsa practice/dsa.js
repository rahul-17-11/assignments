// question 1

// function fact(n) {
//   if (n <= 1) return 1;
//   return fact(n - 1) * n;
// }

// console.log(fact(4));

// question 2

// function valCount(arr, val) {
//   let n = arr.length;
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] == val) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(valCount([2, 3, 2, 4, 2], 2));

// question 3

// function removeZero(arr) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       ans.push(arr[i]);
//     }
//   }
//   return ans;
// }

// console.log(removeZero([0, 1, 0, 2, 3, 0, 4]));

// question 4

// function reverse(arr, l, r) {
//   while (l < r) {
//     let temp = arr[l];
//     arr[l] = arr[r];
//     arr[r] = temp;
//     l++;
//     r--;
//   }
// }

// function rotate(arr, k) {
//   k = k % arr.length;
//   reverse(arr, 0, arr.length - 1);
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, arr.length - 1);
//   return arr;
// }

// console.log(rotate([1, 2, 3, 4, 5], 13));

// question 5

// function mergeArray(left, right) {
//   let n1 = left.length;
//   let n2 = right.length;
//   let i = 0,
//     j = 0,
//     k = 0;

//   let ans = new Array(n1 + n2);

//   while (i < n1 && j < n2) {
//     if (left[i] <= right[j]) {
//       ans[k] = left[i];
//       i++;
//     } else {
//       ans[k] = right[j];
//       j++;
//     }
//     k++;
//   }

//   while (j < n2) {
//     ans[k] = right[j];
//     j++;
//     k++;
//   }
//   while (i < n1) {
//     ans[k] = left[i];
//     i++;
//     k++;
//   }
//   return ans;
// }

// console.log(mergeArray([1, 3, 5], [2, 4, 6]));

// question 6

// function secondLarge(arr) {
//   arr = arr.sort((a, b) => b - a);
//   let i = 0;
//   let hashmap = new Map();
//   while (i < arr.length) {
//     if (hashmap.get(arr[i]) === undefined) {
//       hashmap.set(arr[i], 1);
//     } else {
//       hashmap.set(arr[i], hashmap.get(arr[i]) + 1);
//     }
//     i++;
//   }
//   return [...hashmap.keys()][1];
// }

// console.log(secondLarge([7, 2, 9, 4, 9, 5]));

// question 7

// function binary(arr, val) {
//   let s = 0,
//     e = arr.length - 1;
//   while (s <= e) {
//     let m = Math.floor((s + e) / 2);
//     if (arr[m] == val) {
//       return m;
//     } else if (arr[m] < val) {
//       s = m + 1;
//     } else {
//       e = m - 1;
//     }
//   }
//   return -1;
// }

// console.log(binary([1, 3, 5, 7, 9], 7));

// question 8

function maxSum(arr) {
  let i = 0,
    j = 0;
  let sum = 0;
}

// question 9

// function anagram(str1, str2) {
//   str1 = str1.split("").sort();
//   str2 = str2.split("").sort();
//   return str1.join("") == str2.join("");
// }

// console.log(anagram("listen", "silent"));

// question 10

// function removeDups(str) {
//   str = str.split("");
//   let i = 0;
//   let hashmap = new Map();
//   while (i < str.length) {
//     if (hashmap.has(str[i]) == undefined) {
//       hashmap.set(str[i], 1);
//     } else {
//       hashmap.set(str[i], str[i] + 1);
//     }
//     i++;
//   }
//   return [...hashmap.keys()].join("");
// }

// console.log(removeDups("programming")); // "progamin"

// question 12

// function

// question 13

// function palindrome(str) {
//   let chars = new Set([
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ]);

//   let newStr = "";
//   let i = 0;

//   while (i < str.length) {
//     if (chars.has(str[i])) {
//       newStr += str[i].toLowerCase();
//     }
//     i++;
//   }
//   let check = "";
//   let l = newStr.length - 1;
//   while (l >= 0) {
//     check += newStr[l];
//     l--;
//   }

//   if (check == newStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome("A man, a plan, a canal: Panama"));

//  question 14

// function countVowel(str) {
//   let vowels = new Set(["a", "e", "i", "o", "u"]); // set takes an array
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.has(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowel("implementation"));

// question 15

// function sum(num) {
//   let ans = 0;
//   while (num > 0) {
//     ans += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return ans;
// }

// console.log(sum(8472));

// question 16

function fibo(n) {}
