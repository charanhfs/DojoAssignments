import { DojomailPage } from './app.po';

describe('dojomail App', () => {
  let page: DojomailPage;

  beforeEach(() => {
    page = new DojomailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
