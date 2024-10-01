function rot13(str) {
  return str
    .split("")
    .map(function (char) {
      if (char >= "A" && char <= "Z") {
        let charCode = char.charCodeAt(0);
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      }
      return char;
    })
    .join("");
}

rot13("SERR PBQR PNZC");
