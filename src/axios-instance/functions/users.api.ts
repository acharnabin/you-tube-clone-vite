import { IUserResponse } from "../../typescript/users.interface";
import AxiosInstance from "../axiosIntance"
import { endpoints } from "../endpoint"

export const getAllUsers=async()=>{
    const res=await AxiosInstance.get<IUserResponse>(endpoints.users.list);
    return res.data
}