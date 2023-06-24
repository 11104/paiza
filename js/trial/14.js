//  標準入力で指定した回数繰り返す
let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let count = lines[0];
for (let i=0;i<count;i++){
    console.log("Hello paiza");
}