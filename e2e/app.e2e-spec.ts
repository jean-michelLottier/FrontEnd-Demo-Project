import { MyCvPage } from './app.po';

describe('my-cv App', () => {
  let page: MyCvPage;

  beforeEach(() => {
    page = new MyCvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
