import { ADD_USER } from "./tableTypes";
import { DEL_USER } from "./tableTypes.js";

function createData(Name, Gender, Email) {
  return { Name, Gender, Email };
}
const initialState = {
  rows: localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : [],
};

console.log(JSON.parse(localStorage.getItem("reduxState")));

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const obj = {
        ...state,
        rows: [
          ...state.rows,
          createData(action.payload[0], action.payload[1], action.payload[2]),
        ],
      };
      localStorage.setItem("reduxState", JSON.stringify(obj.rows));
      return obj;
    case DEL_USER:
      const obj2 = {
        rows: [...state.rows.filter((row) => row.Email != action.payload)],
      };
      localStorage.setItem("reduxState", JSON.stringify(obj2.rows));
      return obj2
    default:
      return state;
  }
};

export default tableReducer;
