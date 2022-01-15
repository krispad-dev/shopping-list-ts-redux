import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { useGetIngredientsQuery } from '../../services/ingredient'

import IngredientCard from './IngredientCard'

export default function IngredientList() {

    const ingredients = useGetIngredientsQuery()

    console.log({ from: 'listComponent', state: ingredients });
    
    return (
        <ul>
            {ingredients?.data?.map((ingredient, index) =>  <IngredientCard key={index} { ...ingredient } /> )} 
        </ul>
    )
}
