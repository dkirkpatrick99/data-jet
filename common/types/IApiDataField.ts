export interface IApiDataField {
  _id: string;
  fieldName: string;
  selector: string;
  value: string;
  useApi?: boolean;
  website: string;
};

export const newApiData: IApiDataField = {
  _id: "",
  fieldName: "",
  selector: "",
  value: "",
  website: "",
  useApi: false,
};