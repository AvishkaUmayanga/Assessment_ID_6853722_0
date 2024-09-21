import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isActive: false,
    activeScreenName: '',
}


const allScreensSlice = createSlice({
    name: 'all_screen',
    initialState,
    reducers: {
        allScreensActive: (state) => {
            state.isActive = !state.isActive;
        },
        setScreenName: (state,action) => {
            state.activeScreenName = action.payload;
        }
    }
})

export default allScreensSlice.reducer;
export const {allScreensActive, setScreenName} = allScreensSlice.actions;