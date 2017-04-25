import { CloakFocusPage } from './app.po';

describe('cloak-focus App', () => {
  let page: CloakFocusPage;

  beforeEach(() => {
    page = new CloakFocusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
