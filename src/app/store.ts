import { configureStore } from '@reduxjs/toolkit'; 
import { setupListeners } from '@reduxjs/toolkit/query'

import shoppingListReducer from '../features/shoppingList-slice'
import uiReducer from '../features/ui-slice'
import { ingredientsApi } from '../services/ingredient'

export const store = configureStore({
    reducer: { 
        shoppingList: shoppingListReducer, 
        ui:  uiReducer,
        [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    }, 

            
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ingredientsApi.middleware),

})

export type AppDispatch = typeof store.dispatch; 
export type rootState = ReturnType<typeof store.getState>; 
setupListeners(store.dispatch)

