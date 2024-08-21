"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newApiData = void 0;
const uuid_1 = require("uuid");
;
exports.newApiData = {
    _id: (0, uuid_1.v4)(),
    fieldName: "",
    selector: "",
    value: "",
    website: "",
    useApi: false,
};
