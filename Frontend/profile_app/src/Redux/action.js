export const GET_PROFILE = "GET_PROFILE";

export const getprofile = (payload) =>{
    return {
        type : GET_PROFILE,
        payload : payload,
    }
}