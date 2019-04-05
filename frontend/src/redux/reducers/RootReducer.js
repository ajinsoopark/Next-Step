//Import Redux
import {combineReducers} from 'redux'


//Import Reducers from 
import loginReducer from "./login_logout"
import checkUserAuthStatus_reducer from "./checkAuth_Reducer"


//Combine all Reducers into one for use. 
const RootReducer = combineReducers({
  LoginState: loginReducer,
  CurrentAutState: checkUserAuthStatus_reducer,
})

export default RootReducer
