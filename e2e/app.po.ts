export class PotsdamPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('potsdam-app h1')).getText();
  }
}
