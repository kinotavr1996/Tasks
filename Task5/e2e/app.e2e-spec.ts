import { NestedGridPOCPage } from './app.po';

describe('nested-grid-poc App', () => {
  let page: NestedGridPOCPage;

  beforeEach(() => {
    page = new NestedGridPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
