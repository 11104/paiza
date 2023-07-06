// 数値を10から1までカウントダウン表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count=10;
while(count>=1){
    console.log(count);
    count--;
}