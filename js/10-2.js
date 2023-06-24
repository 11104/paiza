// 特定の条件で数値を表示
let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let number = lines[0];
if(number<=100){
    console.log(number);
}