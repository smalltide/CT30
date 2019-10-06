import { Selector } from "testcafe"; // 引入 testcafe 的 html element 選擇器

fixture`測試案例集`.page`http://devexpress.github.io/testcafe/example`; // 1. 進入 TestCafe Example Page

test("Example Page Test 1", async t => {
  // Chrome Copy selector 定位法
  const supportRemoteBox = Selector("#remote-testing");

  // Chrome Copy XPath 定位法
  // const supportRemoteBox = Selector('*[id="remote-testing"]');

  // 使用 TestCafe 鏈式 Selector API
  const macOSRadio = Selector(".column")
    .find("label")
    .withText("MacOS")
    .child("input");

  // Chrome Copy selector 定位法
  // const macOSRadio = Selector('#macos');

  const interfaceSelect = Selector("#preferred-interface");

  await t
    // 2. 直接使用 html element id，識別 input 在 Your name 輸入 ice
    .typeText("#developer-name", "ice")
    // 3. 透過預定義的 selector supportRemoteBox，選擇 Support for testing on remote devices
    .click(supportRemoteBox)
    // 4. 透過預定義的 selector macOSRadio 選擇 MacOS
    .click(macOSRadio)
    // 5.1 透過預定義的 selector interfaceSelect，按下選單彈出選項
    .click(interfaceSelect)
    // 5.2 使用 ＴestCafe 鏈式 Selector API，找到 interfaceSelect 下的 Both Option
    .click(interfaceSelect.find("option").withText("Both"))
    // 6. 按下 Submit 按鈕
    .click("#submit-button")
    // 7. 確認結果等於 Thank you, ice!
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, ice!");
});


test.only("Example Page Test 2", async t => {
  // Chrome Copy selector 定位法
  const supportRemoteBox = Selector("#remote-testing");

  // Chrome Copy XPath 定位法
  // const supportRemoteBox = Selector('*[id="remote-testing"]');

  // 使用 TestCafe 鏈式 Selector API
  const macOSRadio = Selector(".column")
    .find("label")
    .withText("Linux")
    .child("input");

  // Chrome Copy selector 定位法
  // const macOSRadio = Selector('#macos');

  const interfaceSelect = Selector("#preferred-interface");

  await t
    // 2. 直接使用 html element id，識別 input 在 Your name 輸入 ice
    .typeText("#developer-name", "ice2")
    // 3. 透過預定義的 selector supportRemoteBox，選擇 Support for testing on remote devices
    .click(supportRemoteBox)
    // 4. 透過預定義的 selector macOSRadio 選擇 MacOS
    .click(macOSRadio)
    // 5.1 透過預定義的 selector interfaceSelect，按下選單彈出選項
    .click(interfaceSelect)
    // 5.2 使用 ＴestCafe 鏈式 Selector API，找到 interfaceSelect 下的 Both Option
    .click(interfaceSelect.find("option").withText("Both"))
    // 6. 按下 Submit 按鈕
    .click("#submit-button")
    // 7. 確認結果等於 Thank you, ice!
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, ice2!");
});
