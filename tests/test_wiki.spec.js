const {test, expect} = require('@playwright/test') 

// import {tests, expect} from '@playwright/test' // Второй способ импорта
test('goToWiki', async ({page}) => {
    await page.goto('https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0');
    
    await expect(page).toHaveTitle('Википедия — свободная энциклопедия');

    await page.getByPlaceholder('Искать в Википедии').fill('Воронеж');
    
    await page.getByRole('button',{name:'Перейти'}).click();
    
    await expect(page.locator('h1 > span')).toHaveText('Воронеж');
})
