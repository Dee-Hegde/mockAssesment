import { DATA_ERROR, DATA_REQUEST, DATA_SUCCESS } from "./ActionType"

const initialState={
    loading:true,
    data:[],
    err:false
}

export const countryReducer=(state=initialState,action)=>{
    console.log(action.payload)
    switch(action.type){
        case DATA_REQUEST:
            return{
                ...state,
                loading:true,
                err:false
            }
        case DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload,
                err:false
            }
            case DATA_ERROR:
                return{
                    ...state,
                    loading:false,
                    err:true
                }
            default:
                return state
    }
}