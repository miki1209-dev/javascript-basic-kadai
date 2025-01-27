//JavaScriptで今日の日付を取得して、コンソールに出力するコードを記述してください。
//2024年10月12日にプログラムを実行した場合、実行結果は以下のようになるようにしてください。
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

// todayの値を確認
console.log(today);

console.log(`${year}年${month + 1}月${day}日`);


