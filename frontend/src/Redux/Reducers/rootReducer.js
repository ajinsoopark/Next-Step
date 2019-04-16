//Import Redux
import {combineReducers} from 'redux'


//Import Reducers from
import loginReducer from "./loginLogout"
import checkUserAuthStatus_reducer from "./checkAuthReducer"
// import questionsReducer from './questionsReducer'
import searchReducer from './searchReducer'


//Combine all Reducers into one for use.
const RootReducer = combineReducers({
  LoginState: loginReducer,
  CurrentAutState: checkUserAuthStatus_reducer,
  SearchState: searchReducer
  // questions: questionsReducer
})

export default RootReducer
