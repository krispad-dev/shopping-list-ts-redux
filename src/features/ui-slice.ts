import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../themes/appTheme";


const initialState = {
    isDarkMode: true, 
    themes: [ darkTheme, lightTheme ]
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