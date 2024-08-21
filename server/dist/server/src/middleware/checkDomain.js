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
exports.checkDomain = void 0;
const knownDomains_1 = require("../domains/knownDomains");
const urlAddressClass_1 = require("../domains/urlAddressClass");
// Find search for a known domain from the given URL
const checkDomain = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    for (var domain of knownDomains_1.knownDomains) {
        if (req.body.urlAddress.includes(domain.sourceUrl)) {
            req.body.classObj = new domain.classObj(req.body.urlAddress);
            return next();
        }
    }
    ;
    // No domain found, use generic handler calss
    req.body.classObj = new urlAddressClass_1.UrlAddress(req.body.urlAddress);
    return next();
});
exports.checkDomain = checkDomain;
