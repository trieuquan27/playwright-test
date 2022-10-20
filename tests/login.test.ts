import test, { chromium } from "@playwright/test";
import { runInNewContext } from "vm";

test('Login test demo',async()=>{
 const browser = await chromium.launch();
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto('https://ecommerce-playground.lambdatest.io/');
 await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
 await page.click('text=Login');
 await page.waitForTimeout(5000);


// const newContext= await browser.newContext();
const newPage= await context.newPage();
 await newPage.goto('https://google.com./');
 await newPage.waitForTimeout(5000)

})