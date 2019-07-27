import { browser, by, element } from 'protractor';
import { Keypad } from './keypad.po';

export class SignInPage {
  keypad: Keypad;

  constructor() {
    this.keypad = new Keypad();
  }

  navigateTo() {
    return browser.get(`${browser.baseUrl}/sign-in`) as Promise<any>;
  }

  get logo() {
    return element(by.css('.logo'));
  }

  get signInButton() {
    return element(by.css('button.sign-in'));
  }

  get warningMessage() {
    return element(by.css('div.warn'));
  }

  get pinTextbox() {
    return element(by.css('input.pin-textbox'));
  }
}
