import { CookingBookPage } from './app.po';

describe('cooking-book App', () => {
  let page: CookingBookPage;

  beforeEach(() => {
    page = new CookingBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
