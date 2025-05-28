import puppeteer from "puppeteer";
import { loginPageRepository } from "./ObjectRepository.js";
// Alternative: Use fs if import fails
import { readFileSync } from "fs";
const users = JSON.parse(readFileSync("./validTestLogins.json", "utf-8"));

const loginPage = new loginPageRepository();

// Simple Page Go To
(async ()=> {
    const browser = await puppeteer.launch({
        "headless": false,
    });
    const page = await browser.newPage();
    await page.goto(loginPage.mainUrl);
    
    for (const user of users) {
        console.log(`Testing user: ${user.username}`);
        console.log(`Testing pass: ${user.password}`);
    }
})();
