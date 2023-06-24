// ゼロ・プラス・マイナスを繰り返し判定する
let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let count = lines[0];
console.log(count);
for (let i = 0; i < count; i++) {
    let hensuu=lines[i+1];
    if (hensuu==0){
        console.log(`${hensuu}は0`);
    }else if(hensuu>0){
        console.log(`${hensuu}はプラス`);
    }else{
        console.log(`${hensuu}はマイナス`);
    }
}
