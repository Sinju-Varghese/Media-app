import { serverUrl } from "./serverUrl";
import { commonAPI } from "./commonAPI";
import { Await } from "react-router-dom";

//add vedio API
export const addVedioAPI =async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/allVedio`,reqBody)
}
//get all videos
export const getVedioAPI = async()=>{
    return await commonAPI('get',`${serverUrl}/allVedio`,{})
}
//delete a particular vedio details
export const deleteVedioAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/allVedio/${id}`,{})
}
//add watch histroy API
export const addWatchAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/watchHistory`,reqBody)
}
//get watch histroy API
export const watchHistoryAPI=async()=>{
    return await commonAPI('get',`${serverUrl}/watchHistory`,{})
}
//delete watch histroy API
export const deleteWatchHistoryAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/watchHistory/${id}`,{})
}
//add catergory
export const addCatergoryAPI = async(reqBody) =>{
    return await commonAPI('post',`${serverUrl}/Catergory/${reqBody}`,{})
}
//get catergory 
export const getCatergoryAPI =async() =>{
    return await commonAPI('get',`${serverUrl}/Catergory`,{})
}