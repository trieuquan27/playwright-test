import { test, expect } from '@playwright/test';

test ('dropdown handling',async ({page}) => {
 
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption("id=select-demo",{
        // label:"Friday",
        // value:"Tuesday",
        index:6,
    });
    await page.waitForTimeout(5000);

  await page.selectOption('#multi-select',[{
    label:"California",
  },
   { value:"New York"
},
   { index:4,
             
  }
]);
    // await page.waitForTimeout(3000);
    await page.click('#printAll');
    await page.waitForTimeout(8000);
})


test("bootstrap dropdown",async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    




})


