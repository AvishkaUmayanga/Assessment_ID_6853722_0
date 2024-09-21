import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allFields: []
}

const addFieldsSlice = createSlice({
    name: 'field_slice',
    initialState,
    reducers: {
        setField: (state, action) => {
            state.allFields = [...state.allFields, action.payload];
        },
        removeField: (state, action) => {
            state.allFields.splice(action.payload, 1);
        }
    }
})

export default addFieldsSlice.reducer;
export const {setField, removeField} = addFieldsSlice.actions;