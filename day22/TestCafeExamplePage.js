import { Selector } from "testcafe"; // 引入 testcafe 的 html element 選擇器
const dataSet = require("./data.json");

fixture`測試案例集`.page`http://devexpress.github.io/testcafe/example`; // 1. 進入 TestCafe Example Page

dataSet.forEach(data => {
  const { name, feature, os, interfaceOption, resultText } = data;

  test(`Example Page Test Name = ${name}`, async t => {
    // 使用 TestCafe 鏈式 Selector API
    const inputSelector = Selector(".column").find("label");
    const interfaceSelect = Selector("#preferred-interface");

    await t
      // 2. 直接使用 html element id，識別 input 並根據 data 的設定輸入 name
      .typeText("#developer-name", name)
      // 3. 透過預定義的 selector inputSelector 並根據 data 的設定勾選
      .click(inputSelector.withText(feature).child("input"))
      // 4. 透過預定義的 selector inputSelector 並根據 data 的設定勾選
      .click(inputSelector.withText(os).child("input"))
      // 5.1 透過預定義的 selector interfaceSelect，按下選單彈出選項
      .click(interfaceSelect)
      // 5.2 使用 ＴestCafe 鏈式 Selector API，找到 interfaceSelect 並根據 data 的設定選擇 Option
      .click(interfaceSelect.find("option").withText(interfaceOption))
      // 6. 按下 Submit 按鈕
      .click("#submit-button")
      // 7. 確認結果等於 data 的 resultText
      .expect(Selector("#article-header").innerText)
      .eql(resultText);
  });
});
