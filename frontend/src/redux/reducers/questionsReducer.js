import { RECEIVE_CATEGORIES } from "../actions/questionActions"
import merge from "lodash/merge";

const normalize = (arrOfObj) => {
  let obj = {};
  for(let i = 0; i < arrOfObj.length; i++){
    obj[arrOfObj[i].id] = arrOfObj[i]
  }

  return obj

}

const questionsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return normalize(action.pins);
    default:
    return oldState
  }
}

export default questionsReducer;
