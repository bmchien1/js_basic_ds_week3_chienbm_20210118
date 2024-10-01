function palindrome(str) {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

palindrome("eye");
