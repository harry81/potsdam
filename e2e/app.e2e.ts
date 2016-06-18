import { PotsdamPage } from './app.po';

describe('potsdam App', function() {
  let page: PotsdamPage;

  beforeEach(() => {
    page = new PotsdamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('potsdam works!');
  });
});
