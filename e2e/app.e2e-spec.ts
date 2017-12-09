import { AppPage } from './app.po';

describe('Angular2-express-starter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title Weather module', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Weather module');
  });
});
