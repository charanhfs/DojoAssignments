import { RoutingExamplePage } from './app.po';

describe('routing-example App', () => {
  let page: RoutingExamplePage;

  beforeEach(() => {
    page = new RoutingExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
