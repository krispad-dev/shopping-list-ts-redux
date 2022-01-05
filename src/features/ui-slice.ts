import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    isDarkMode: false, 
}


const ui = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleDarkMode(state) {
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            }
        }
    }

})


export const { toggleDarkMode } = ui.actions
export default ui.reducer 