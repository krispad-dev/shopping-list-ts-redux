import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Ingredient } from '../interfaces/Ingredient'

interface AppState {
    ingredients: Ingredient[];
 }


const initialState: AppState = {
    ingredients: [],
 }


 const shoppingList = createSlice({

    name: 'shoppingList',
    initialState,
    reducers: {

        // incremented
        addIngredient(state, action: PayloadAction<Ingredient>) {
            return {
                ...state,
                ingredients: [ ...state.ingredients, action.payload ]
            }
        },

        setIngredients(state, action: PayloadAction<Ingredient[]>) {
            return {
                ...state,
                ingredients:  action.payload
            }
        }
    }
 })


export const { addIngredient, setIngredients } = shoppingList.actions;
export default shoppingList.reducer;