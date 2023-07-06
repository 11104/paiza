// 1から10までの偶数を表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count=2;
while(count<=10){
    console.log(count);
    count+=2;
}