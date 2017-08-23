import { ProgressivemindsPage } from './app.po';

describe('progressiveminds App', () => {
  let page: ProgressivemindsPage;

  beforeEach(() => {
    page = new ProgressivemindsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
