const dashedText = "background-color";

let text = dashedText.split("-");
// console.log(text);
let text2 = text[1].charAt(0).toUpperCase() + text[1].slice(1);
// console.log(text2);
let textCombine = text[0].concat(text2);
console.log(textCombine);
