import { ADD_USER } from "./tableTypes.js";
import { DEL_USER } from "./tableTypes.js";

export const addUser = (values) => {
  return {
    type: ADD_USER,
    payload: values
  };
};

export const delUser =(id)=>{
    return{
        type: DEL_USER,
        payload:id
    }
}
