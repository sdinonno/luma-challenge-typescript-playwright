import { expect, test } from '@playwright/test';
import pages from '../utils/pagesAttr';

test.describe('Navigation in LUMA website', () => {

    for(const page in pages.navPages) {
        const pageInfo = pages.navPages[page]

        test(`Validate redirection to the section "${pageInfo.name}"`, async ({ page }) => {
            await test.step('I am in the LUMA home page', async () => {
                page.goto("/");
                await expect(page).toHaveTitle('Home Page');
            })

            await test.step(`When I click on "${pageInfo.name}"`, async () => {
                page.getByRole('menuitem', {name: pageInfo.name}).click();
                await page.waitForURL(`**${pageInfo.url}`)
            })

            await test.step(`I am redirected to the section with the title "${pageInfo.title}"`, async () => {
                await expect(page).toHaveTitle(pageInfo.title);
            })
        })
    }
})
