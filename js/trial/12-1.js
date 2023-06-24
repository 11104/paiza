// 数値の大きさを判定する
let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let number = lines[0];
if(number>100){
    console.log(number);
}else if(number<=100){
    console.log("100以下です");
}