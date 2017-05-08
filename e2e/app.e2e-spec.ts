import { AngularTourOfHeroesPage } from './app.po';

describe('angular-tour-of-heroes App', () => {
  let page: AngularTourOfHeroesPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
