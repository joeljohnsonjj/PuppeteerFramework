import puppeteer from "puppeteer";
import { loginPageRepository } from "./Pages/ObjectRepository.js";
import { readFileSync } from "fs";
import { logins } from "./Pages/loginPage.js";

const obj1 = new loginPageRepository();
const obj2 = new logins();

// Simple Page Go To
(async ()=> {
    const browser = await puppeteer.launch({
        "headless": false,
    });
    const page = await browser.newPage();
    await page.goto(obj1.mainUrl);
    
    const users = JSON.parse(readFileSync("./validTestLogins.json", "utf-8"));

    for (const user of users) {
        obj2.loginPage(page, user.username, user.password);
        
    }
})();
