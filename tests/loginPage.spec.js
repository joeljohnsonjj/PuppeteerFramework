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

/* after(async function () {
  await global.browser.close();
}); */

describe('Login Tests', function () {
  let page;
  before(async function () {
    page = await browser.newPage();
    await page.goto(obj1.mainUrl);
  });
  
  /* after(async function () {
    await page.close();
  }); */

  it("Valid Logins", async function () {
    const users = JSON.parse(readFileSync("fixtures/validTestLogins.json", "utf-8"));
    for (const user of users) {
        obj2.loginPage(page, user.username, user.password);
        await page.waitForNavigation();
        expect(page.url()).to.equal(obj1.expectedUrl);
        await page.goto(obj1.mainUrl);
    }
  });

  it.only("Invalid Logins", async function () {
    const users = JSON.parse(readFileSync("fixtures/invalidTestLogins.json", "utf-8"));
    for (const user of users) {
        await obj2.loginPage(page, user.username, user.password);
    }
  });

});