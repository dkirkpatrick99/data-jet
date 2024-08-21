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
exports.UrlAddress = void 0;
const playwright_1 = require("playwright");
// The super class for all new domains
class UrlAddress {
    constructor(url) {
        this.html = "";
        this.apiValues = [];
        this.error = "";
        this.urlAddress = url;
    }
    ;
    // Async constructor for handling async function calls
    asyncConstructor() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataObj = yield this.useHeadlessBrowser(this.urlAddress);
            this.html = dataObj.html;
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
                // Disable all anchor tags
                const anchorTags = document.getElementsByTagName("a");
                for (var tag of anchorTags) {
                    tag.style.pointerEvents = "none";
                    tag.style.cursor = "default";
                }
                return { html: document.documentElement.outerHTML, data: "{}" };
            });
            yield browser.close();
            return pageObj;
        });
    }
    ;
}
exports.UrlAddress = UrlAddress;
;
