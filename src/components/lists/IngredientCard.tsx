import React from 'react'
import styled from 'styled-components'
import { Ingredient } from '../../interfaces/Ingredient'

export default function IngredientCard({ ingredient }:Ingredient) {
    return (
        <div>
            <p>{ingredient}</p>
        </div>
    )
}

