import { Selector } from 'testcafe'; // 引入 testcafe 的 html element 選擇器

fixture `Getting Started` // 設定測試集名稱
    .page `http://devexpress.github.io/testcafe/example`; // 測試目標網頁

test('HelloWorld test', async t => { // 一個測試案例
    await t
        .typeText('#developer-name', 'HelloWorld') //在文字框輸入 HelloWorld
        .click('#submit-button') //按下送出按鈕
        .expect(Selector('#article-header').innerText).eql('Thank you, HelloWorld!');
        // 使用 expect 驗證 #article-header 內的文字 等於 Thank you, HelloWorld!
});