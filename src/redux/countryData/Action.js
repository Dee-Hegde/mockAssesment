import { DATA_ERROR, DATA_REQUEST, DATA_SUCCESS } from "./ActionType";
import axios from "axios"


export const countryDataRequest=()=>{
    return{
        type:DATA_REQUEST
    }
}
export const countryDataSuccess=(payload)=>{
    return{
        type:DATA_SUCCESS,
        payload:payload
    }
}
export const countryDataErr=()=>{
    return{
        type:DATA_ERROR
    }
}

export const getDataProcess=()=>(dispatch)=>{
    console.log("called")
  dispatch(countryDataRequest())
  return axios.get("https://restcountries.com/v3.1/all")
  .then(res => {
    console.log(res.data)
      dispatch(countryDataSuccess(res.data) )
  })
  .catch(err=> {
      dispatch( countryDataErr() )
  })

}