import { loginPageRepository } from "./ObjectRepository.js";
const obj1 = new loginPageRepository();

export class logins {

    async loginPage(page, username, password) {
        if (username != null && password != null) {
            await page.locator(obj1.usernameField).fill(username);
            await page.locator(obj1.passwordField).fill(password);
            await page.locator(obj1.loginButton).click();
        }
        else if (username == null && password != null) {
            await page.locator(obj1.passwordField).fill(password);
            await page.locator(obj1.loginButton).click();
        }
        else if (password == null && username != null) {
            await page.locator(obj1.usernameField).fill(username);
            await page.locator(obj1.loginButton).click();
        }
        else
            await page.locator(obj1.loginButton).click();
    }

}
  