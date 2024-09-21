import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: 'Welcome to our form',
    description: 'This is a description of the form',
    btnText: 'start'
}

const formSlice = createSlice({
    name: 'form_slice',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setBtnText: (state, action) => {
            state.btnText = action.payload;
        }
    }
})

export default formSlice.reducer;
export const { setTitle, setDescription, setBtnText } = formSlice.actions;