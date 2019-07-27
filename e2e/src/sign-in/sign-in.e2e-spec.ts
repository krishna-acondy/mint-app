import { SignInPage } from './sign-in.po';
import { browser } from 'protractor';

describe('Sign In Page', () => {
  let page: SignInPage;

  beforeEach(() => {
    page = new SignInPage();
  });

  it('should display the mint logo', () => {
    page.navigateTo();
    expect(page.logo.isDisplayed).toBeTruthy();
  });

  it('should contain a readonly pin textbox', () => {
    page.navigateTo();
    expect(page.pinTextbox.isDisplayed()).toBeTruthy();
    expect(page.pinTextbox.getAttribute('readonly')).toBeTruthy();
  });

  it('should display a number in the textbox when the keypad button is pressed', () => {
    page.navigateTo();
    page.keypad.pressKey(1);
    expect(page.pinTextbox.getAttribute('value')).toEqual('1');
  });

  it('should error out when an invalid PIN is entered', () => {
    page.navigateTo();
    page.keypad.pressKey(1);
    page.keypad.pressKey(1);
    page.keypad.pressKey(1);
    page.keypad.pressKey(2);

    page.signInButton.click();

    browser.wait(
      page.warningMessage.isDisplayed(),
      2000);

    expect(page.warningMessage.isDisplayed()).toBeTruthy();
  });

  it('should navigate to the home page when a valid PIN is entered', () => {
    page.navigateTo();
    page.keypad.pressKey(1);
    page.keypad.pressKey(1);
    page.keypad.pressKey(1);
    page.keypad.pressKey(1);

    page.signInButton.click();

    browser.wait(
      browser.getCurrentUrl().then(url => url.includes('home')),
      2000);

    browser.getCurrentUrl().then(url => {
      expect(url).toContain('home');
    });
  });
});
