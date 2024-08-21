"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirBnB = void 0;
const playwright_1 = require("playwright");
const uuid_1 = require("uuid");
const urlAddressClass_1 = require("../urlAddressClass");
;
class AirBnB extends urlAddressClass_1.UrlAddress {
    constructor(url) {
        super(url);
        this.AirBnBSections = [
            { dataFieldName: "amenities", sectionName: "AMENITIES_DEFAULT", dataAtKeyName: "title", keyValsToCheck: { "__typename": "Amenity", "available": true, }, keyword: null },
            { dataFieldName: "location", sectionName: "LOCATION_DEFAULT", dataAtKeyName: "subtitle", keyValsToCheck: null, keyword: null },
            { dataFieldName: "title", sectionName: "TITLE_DEFAULT", dataAtKeyName: "title", keyValsToCheck: { "__typename": "PdpTitleSection" }, keyword: null },
            { dataFieldName: "bathrooms", sectionName: "AVAILABILITY_CALENDAR_INLINE", dataAtKeyName: "title", keyValsToCheck: null, keyword: "bath" },
            { dataFieldName: "beds", sectionName: "AVAILABILITY_CALENDAR_INLINE", dataAtKeyName: "title", keyValsToCheck: null, keyword: "bed" },
        ];
        // Set up data sections 
        this.getSections = (theObject) => {
            let result = [];
            theObject === null || theObject === void 0 ? void 0 : theObject.forEach((section) => {
                const bnbSectionValues = this.AirBnBSections.filter((bnbSection) => bnbSection.sectionName === section.sectionId);
                bnbSectionValues === null || bnbSectionValues === void 0 ? void 0 : bnbSectionValues.forEach((bnbSectionValue) => {
                    const dataValue = this.getObject(section, new Set(), bnbSectionValue.dataAtKeyName, bnbSectionValue === null || bnbSectionValue === void 0 ? void 0 : bnbSectionValue.keyValsToCheck, bnbSectionValue.keyword);
                    result.push({ _id: (0, uuid_1.v4)(), fieldName: bnbSectionValue.dataFieldName, selector: "", value: [...dataValue].join(", "), useApi: true, website: this.urlAddress });
                });
            });
            return result;
        };
        // Find preset AirBnBSections by key name
        this.getObject = (theObject, result = new Set(), dataAtKeyName, keyValsToCheck, keyword) => {
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
                            if (theObject[prop] !== keyValsToCheck[prop])
                                flag = false;
                        }
                    }
                    if (keyword && !theObject[dataAtKeyName].toLowerCase().includes(keyword))
                        flag = false;
                    if (flag) {
                        result.add(theObject[dataAtKeyName]);
                    }
                }
                for (var prop in theObject) {
                    if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                        result = this.getObject(theObject[prop], result, dataAtKeyName, keyValsToCheck, keyword);
                    }
                }
                ;
            }
            return result;
        };
        this.urlAddress = url;
    }
    ;
    // Async constructor for handling async function calls
    asyncConstructor() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g;
            const dataObj = yield this.useHeadlessBrowser(this.urlAddress);
            this.html = dataObj.html;
            if ((dataObj === null || dataObj === void 0 ? void 0 : dataObj.data) && ((_a = JSON.parse(dataObj === null || dataObj === void 0 ? void 0 : dataObj.data)) === null || _a === void 0 ? void 0 : _a.niobeMinimalClientData)) {
                this.apiValues = this.getSections((_g = (_f = (_e = (_d = (_c = (_b = JSON.parse(dataObj === null || dataObj === void 0 ? void 0 : dataObj.data)) === null || _b === void 0 ? void 0 : _b.niobeMinimalClientData[0][1]) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.presentation) === null || _e === void 0 ? void 0 : _e.stayProductDetailPage) === null || _f === void 0 ? void 0 : _f.sections) === null || _g === void 0 ? void 0 : _g.sections);
            }
            return this;
        });
    }
    ;
    // Initialize the headless browser to fetch DOM data
    useHeadlessBrowser(urlAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield playwright_1.chromium.launch(); // Or 'firefox' or 'webkit'.
            const page = yield browser.newPage();
            yield page.goto(urlAddress);
            // Wait for your initial dynamic JavaScript code to finish... typically this involves scripts being fetched and then those scripts doing something like fetching some data and rendering it. You would expect right after fetch the render would happen, so networkidle is usually enough 
            yield page.waitForLoadState("networkidle");
            // Get your html after the JavaScript has done some things
            const pageObj = yield page.evaluate(() => {
                // Runs inside the actual page
                // Remove known cookies banner
                const foundEle = document.querySelector('div[data-testid="main-cookies-banner-container"]');
                if (foundEle)
                    foundEle.remove();
                // Get and remove the api data from DOM script
                const dataObj = document.querySelector('script[id="data-deferred-state-0"]');
                if (dataObj)
                    dataObj.remove();
                // Disable all anchor tags
                const anchorTags = document.getElementsByTagName("a");
                for (var tag of anchorTags) {
                    tag.style.pointerEvents = "none";
                    tag.style.cursor = "default";
                }
                return { html: document.documentElement.outerHTML, data: (dataObj === null || dataObj === void 0 ? void 0 : dataObj.innerHTML) || "{}" };
            });
            yield browser.close();
            return pageObj;
        });
    }
    ;
}
exports.AirBnB = AirBnB;
