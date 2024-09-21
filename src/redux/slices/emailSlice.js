import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    emailTitle: '',
    emailDescription: 'This will be used to contact your next steps.',

}

const emailSlice = createSlice({
    name: 'email_slice',
    initialState,
    reducers: {
        setEmailTitle: (state, action) => {
            state.emailTitle = action.payload;
        },
        setEmailDescription: (state, action) => {
            state.emailDescription = action.payload;
        },
    }
})

export default emailSlice.reducer;
export const { setEmailTitle, setEmailDescription } = emailSlice.actions;