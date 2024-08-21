import { getClient } from "../utils/axiosDefaults";

// Fetch data from proxy route
export const useProxy = async (urlAddress: string) => {
  const response = await getClient().post(`/users/proxy`, {urlAddress});
  return response.data;
};