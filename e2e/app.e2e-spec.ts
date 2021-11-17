import { MytodoAngularPage } from './app.po';

describe('mytodo-angular App', function() {
  let page: MytodoAngularPage;

  beforeEach(() => {
    page = new MytodoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
