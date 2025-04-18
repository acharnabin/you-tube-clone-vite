import AxiosInstance from "../axiosIntance";
import { endpoints } from "../endpoint";


export const loginFunction = async (data: {
  username: string;
  password: string;
}) => {
  // const res = await AxiosInstance.post(endpoints.auth.login, data);
  const res=await AxiosInstance({
    method:"GET",
    url:endpoints.auth.login,
    data
  })

  return res.data;
};
