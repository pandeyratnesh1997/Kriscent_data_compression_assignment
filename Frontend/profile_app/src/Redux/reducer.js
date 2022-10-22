import { GET_PROFILE } from "./action";

const initState = {
    name : "",
    mobile : '',
    image : '',
    username : ''
}

export const reducer = (state=initState, action) => {
    switch(action.type){
        case  GET_PROFILE :{
            return {
                ...state,
                name : action.payload.name,
                mobile : action.payload.mobile,
                image : action.payload.image,
                username : action.payload.uniqueId
            }
        }
        default : {
            return state
        }
    }
}