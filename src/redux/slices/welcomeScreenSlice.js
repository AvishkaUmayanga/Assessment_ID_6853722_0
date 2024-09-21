import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isActive: false
}


const welcomeScreenSlice = createSlice({
    name: 'welcome_screen',
    initialState,
    reducers: {
        screenActive: (state) => {
            state.isActive = !state.isActive;
        }
    }
})

export default welcomeScreenSlice.reducer;
export const {screenActive} = welcomeScreenSlice.actions;