import { v4 as uuidv4 } from 'uuid';

export interface IApiDataField {
  _id: string;
  fieldName: string;
  selector: string;
  value: string;
  useApi?: boolean;
  website: string;
};

export const newApiData = {
  _id: uuidv4(),
  fieldName: "",
  selector: "",
  value: "",
  website: ""
};