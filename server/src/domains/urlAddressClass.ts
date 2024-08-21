import { chromium } from 'playwright';
import { IApiDataField } from '../../../common/types';

export class UrlAddress  {
  public urlAddress: string;
  public html: string = "";
  public apiValues: IApiDataField[] = [];
  public error: string = "";

  constructor(url: string) {
    this.urlAddress = url;
  };

  public async asyncConstructor(): Promise<this> {
    const dataObj = await this.useHeadlessBrowser(this.urlAddress);
    this.html = dataObj.html;
    return this;
  };

  async useHeadlessBrowser(urlAddress: string) {
    console.log("Using Generic !!!!!!!!!!!!!!!!!!!!!")
    const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto(urlAddress);

    // Wait for your initial dynamic JavaScript code to finish... typically this involves scripts being fetched and then those scripts doing something like fetching some data and rendering it. You would expect right after fetch the render would happen, so networkidle is usually enough 
    await page.waitForLoadState("networkidle");

    // Get your html after the JavaScript has done some things
    const pageObj = await page.evaluate(() => {

    const anchorTags = document.getElementsByTagName("a");
    for(var tag of anchorTags) {
      tag.style.pointerEvents="none";
      tag.style.cursor="default";
    }

      return {html: document.documentElement.outerHTML, data: "{}"};
    });

    await browser.close();

    return pageObj;
  };
};