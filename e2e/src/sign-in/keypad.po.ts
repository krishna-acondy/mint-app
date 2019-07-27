import { by, element } from 'protractor';

export class Keypad {
    pressKey(value: number) {
        element.all(by.css('button.button'))
            .filter(e => e.getText().then(text => text === `${value}`))
            .click();
    }
}
