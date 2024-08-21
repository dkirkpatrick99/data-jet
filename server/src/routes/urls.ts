import { Router } from "express";
import { getAirBnb } from "../handlers/urls";
import { checkDomain } from "../middleware/checkDomain";

const router = Router();

router.post("/users/proxy", checkDomain, getAirBnb);

export default router;