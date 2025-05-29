import puppeteer from "puppeteer";
import { expect } from "chai";
import { loginPageRepository } from "../pages/ObjectRepository.js";
import { readFileSync } from "fs";
import { logins } from "../pages/loginPage.js";

const obj1 = new loginPageRepository();
const obj2 = new logins();

before(async function () {
  global.expect = expect;
  global.browser = await puppeteer.launch({
    "headless": false,
  });
});
// close the browser when the tests are finished
/* after(async function () {
  await global.browser.close();
}); */

describe('smoke test', function () {
  let page, users;
  before(async function () {
    page = await browser.newPage();
    await page.goto(obj1.mainUrl);
    users = JSON.parse(readFileSync("fixtures/validTestLogins.json", "utf-8"));
  });
  // close browser tab after all tests
  /* after(async function () {
    await page.close();
  }); */
  it("Should Perform Valid Logins", async function () {
    for (const user of users) {
        obj2.loginPage(page, user.username, user.password);
    }
  });
});