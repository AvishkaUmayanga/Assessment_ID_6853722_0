import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeBtn: 'content'
}

const buttonSlice = createSlice({
    name: "active_button",
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.activeBtn = action.payload;
        }
    }
})

export default buttonSlice.reducer;
export const {setActive} = buttonSlice.actions;