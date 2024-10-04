import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import utilsReducer from "./utilsSlice";


const rootReducer = combineReducers({
    utils: utilsReducer,
    user: userReducer,
  
});

export default rootReducer;