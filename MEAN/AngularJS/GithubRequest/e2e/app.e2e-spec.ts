import { GithubRequestPage } from './app.po';

describe('github-request App', () => {
  let page: GithubRequestPage;

  beforeEach(() => {
    page = new GithubRequestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
