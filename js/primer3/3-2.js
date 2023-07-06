// 数値を20から10までカウントダウン表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count=20;
while(count>=10){
    console.log(count);
    count--;
}