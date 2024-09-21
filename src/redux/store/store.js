import { configureStore } from "@reduxjs/toolkit";
import buttonSliceReducer from "../slices/buttonSlice";
import welcomeScreenSliceReducer from "../slices/welcomeScreenSlice";
import formSliceReducer from "../slices/formSlice";
import emailSliceReducer from "../slices/emailSlice";
import addFieldsSliceReducer from "../slices/addFieldsSlice";
import allScreensSliceReducer from "../slices/allScreensSlice";

const store = configureStore({
    reducer:{
        buttonSlice: buttonSliceReducer,
        welcomeScreenSlice: welcomeScreenSliceReducer,
        formSlice: formSliceReducer,
        emailSlice: emailSliceReducer,
        allScreensSlice: allScreensSliceReducer,
        addFieldsSlice: addFieldsSliceReducer
    }
})

export default store;