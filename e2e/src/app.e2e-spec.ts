import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should login', async () => {


    page.navigateTo();

    var ele= element(by.css('#email-input'));
    ele.sendKeys("1@test");

    var ele2= element(by.css('#email-input'));
    ele2.sendKeys("123");

    var ele3= element(by.css('#btn-submit'));
    ele3.click();

  });

});
