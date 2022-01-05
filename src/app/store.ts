import { configureStore } from '@reduxjs/toolkit'; 
import shoppingListReducer from '../features/shoppingList-slice'


export const store = configureStore({
    reducer: { 
        shoppingList: shoppingListReducer, 
    } 

})

export type AppDispatch = typeof store.dispatch; 
export type rootState = ReturnType<typeof store.getState>; 

