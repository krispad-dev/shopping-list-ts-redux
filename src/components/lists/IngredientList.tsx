import React from 'react'
import { useAppSelector } from '../../app/hooks'

import IngredientCard from './IngredientCard'

export default function IngredientList() {


    const ingredients = useAppSelector(state => state.shoppingList.ingredients)

    console.log({ from: 'listComponent', state: ingredients });
    
    return (
        <ul>
            {ingredients.map((ingredient, index) =>  <IngredientCard key={index} { ...ingredient } /> )}
        </ul>
    )
}
