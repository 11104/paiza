process.stdin.resume();
process.stdin.setEncoding('utf8');
var dice = parseInt(Math.random() * 6) + 1;
console.log("サイコロは" + dice);
if(4<=dice&&dice<=6){
    console.log("スライムの攻撃をかわした")
}else{
    console.log("スライムから10のダメージを受けた");
}