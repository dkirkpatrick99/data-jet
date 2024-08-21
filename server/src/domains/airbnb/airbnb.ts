import { chromium } from 'playwright';
import { v4 as uuidv4 } from 'uuid';
import { UrlAddress } from '../urlAddressClass';
import { IApiDataField } from '../../types/IApiDataField';

interface IAirBnBSections {
  dataFieldName: string; 
  sectionName: string; 
  dataAtKeyName: string; 
  keyValsToCheck: Record<string, any> | null;
  keyword: string | null;
};

export class AirBnB extends UrlAddress {
   private AirBnBSections: IAirBnBSections[] = [
    { dataFieldName: "amenities", sectionName: "AMENITIES_DEFAULT", dataAtKeyName: "title", keyValsToCheck: { "__typename": "Amenity", "available": true, }, keyword: null },
    { dataFieldName: "location", sectionName: "LOCATION_DEFAULT", dataAtKeyName: "subtitle", keyValsToCheck: null, keyword: null },
    { dataFieldName: "title", sectionName: "TITLE_DEFAULT", dataAtKeyName: "title", keyValsToCheck: { "__typename": "PdpTitleSection" }, keyword: null },
    { dataFieldName: "bathrooms", sectionName: "AVAILABILITY_CALENDAR_INLINE", dataAtKeyName: "title", keyValsToCheck: null, keyword: "bath" },
    { dataFieldName: "beds", sectionName: "AVAILABILITY_CALENDAR_INLINE", dataAtKeyName: "title", keyValsToCheck: null, keyword: "bed" },
  ];

  constructor(url: string) {
    super(url);
    this.urlAddress = url;
  };

  public async asyncConstructor(): Promise<this> {
    const dataObj = await this.useHeadlessBrowser(this.urlAddress);
    this.html = dataObj.html;

    if(dataObj?.data) {
      this.apiValues = this.getSections(JSON.parse(dataObj?.data)?.niobeMinimalClientData[0][1]?.data?.presentation?.stayProductDetailPage?.sections?.sections);
    }

    return this;
  };

  public getSections = (theObject: Record<any, any>[]): IApiDataField[] => {
    let result: IApiDataField[] = [];

    theObject?.forEach((section) => {
      const bnbSectionValues = this.AirBnBSections.filter((bnbSection) => bnbSection.sectionName ===  section.sectionId);

      bnbSectionValues?.forEach((bnbSectionValue) => {
        const dataValue = this.getObject(section, new Set(), bnbSectionValue.dataAtKeyName, bnbSectionValue?.keyValsToCheck, bnbSectionValue.keyword);
        result.push({_id: uuidv4() , fieldName: bnbSectionValue.dataFieldName, selector: "", value: [...dataValue].join(", "), useApi: true, website: this.urlAddress});
      });
    });

    return result;
  };

  private getObject = (theObject: Record<any, any>, result: Set<any> = new Set(), dataAtKeyName: string, keyValsToCheck: Record<string, any> | null, keyword: string | null): Set<any> => {

    if (theObject instanceof Array) {
      for (var i = 0; i < theObject.length; i++) {
        result = this.getObject(theObject[i], result, dataAtKeyName, keyValsToCheck, keyword);
      }
    }
    else {
      if (theObject[dataAtKeyName]) {
        let flag = true;

        if (keyValsToCheck) {
          for (var prop in keyValsToCheck) {
            if (theObject[prop] !== keyValsToCheck[prop]) flag = false;
          }
        }

        if (keyword && !theObject[dataAtKeyName].toLowerCase().includes(keyword)) flag = false;
        
        if (flag) {
          result.add(theObject[dataAtKeyName]);
        }
      }
        
      for (var prop in theObject) {
        if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
          result = this.getObject(theObject[prop], result, dataAtKeyName, keyValsToCheck, keyword);
        }

      };
    }

    return result;
  }

async useHeadlessBrowser(urlAddress: string) {
  console.log("Using AirBnB !!!!!!!!!!!!!!!!!!!!!")
  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto(urlAddress);

  // Wait for your initial dynamic JavaScript code to finish... typically this involves scripts being fetched and then those scripts doing something like fetching some data and rendering it. You would expect right after fetch the render would happen, so networkidle is usually enough 
  await page.waitForLoadState("networkidle");

  // Get your html after the JavaScript has done some things
  const pageObj = await page.evaluate(() => {

    // Runs inside the actual page
    const foundEle = document.querySelector('div[data-testid="main-cookies-banner-container"]');
    if(foundEle) foundEle.remove();

    const dataObj = document.querySelector('script[id="data-deferred-state-0"]');
    if(dataObj) dataObj.remove();

    const anchorTags = document.getElementsByTagName("a");
    for(var tag of anchorTags) {
      tag.style.pointerEvents="none";
      tag.style.cursor="default";
    }

    return {html: document.documentElement.outerHTML, data: dataObj?.innerHTML || "{}"}
  });

  await browser.close();

  return pageObj;
};
}