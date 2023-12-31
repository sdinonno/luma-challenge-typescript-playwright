import { chromium, FullConfig } from '@playwright/test';
import SignInPage from '../pages/sign-in-page';
import pagesUrl from '../utils/pagesUrl';

async function globalSetup(config: FullConfig) {
  const user = process.env.USERNAME!;
  const password = process.env.PASSWORD!;
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch({ headless: true, timeout: 10000 });
  const page = await browser.newPage();
  const signInPage = new SignInPage(page);

  await page.goto(baseURL);
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;