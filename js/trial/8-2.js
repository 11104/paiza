// データを受け取って表示しよう
let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let message1 = lines[0];
let message2 = lines[1];

console.log(message1);
console.log(message2);
