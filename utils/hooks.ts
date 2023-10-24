import { Page } from '@playwright/test';
import { buildUrl } from './urlBuilder';
import SignInPage from '../pages/sign-in-page';
import SignUpPage from '../pages/sign-up-page';
import HomePage from '../pages/home-page';

async function beforeEach(
  page: Page,
  PageObjectParam: SignInPage|SignUpPage|HomePage,
  targetPage: string,
  params?: Record<any, any>
) {
  await page.goto(buildUrl(targetPage, params));
  const pageObject = await new PageObjectParam(page);
  return pageObject;
}

export default { beforeEach };