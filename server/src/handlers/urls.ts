import { Request, Response } from "express-serve-static-core";
import { UrlAddress } from "../domains/urlAddressClass";

// Get the url data by a given url
export async function getAirBnb(req: Request<{}, {}, {urlAddress: string, classObj: UrlAddress}>, res: Response) {
  try {
    const urlObj = await req.body.classObj.asyncConstructor();
    res.send({html: urlObj.html, data: urlObj.apiValues});
  } catch (error) {
    res.status(401).send("Opps! Something went wrong. Try a different URL.");
  }
};

