"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const urls_1 = require("../handlers/urls");
const checkDomain_1 = require("../middleware/checkDomain");
const router = (0, express_1.Router)();
router.post("/users/proxy", checkDomain_1.checkDomain, urls_1.getAirBnb);
exports.default = router;
