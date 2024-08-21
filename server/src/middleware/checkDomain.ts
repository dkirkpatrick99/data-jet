import { NextFunction, Request, Response } from "express";
import { knownDomains } from "../domains/knownDomains";
import { UrlAddress } from "../domains/urlAddressClass";

export const checkDomain = async (req: Request<{}, {}, {urlAddress: string, classObj?: UrlAddress}>, res: Response, next: NextFunction) => {
  for(var domain of knownDomains) {
    if(req.body.urlAddress.includes(domain.sourceUrl)) {
      req.body.classObj = new domain.classObj(req.body.urlAddress)
      return next();
    }
  };

  req.body.classObj = new UrlAddress(req.body.urlAddress);
  return next();
};