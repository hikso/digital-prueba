import { FilingTrackerPage } from './app.po';

describe('filing-tracker App', function() {
  let page: FilingTrackerPage;

  beforeEach(() => {
    page = new FilingTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
