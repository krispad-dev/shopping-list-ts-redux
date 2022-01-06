import React from 'react'
import styled from 'styled-components'
import { Ingredient } from '../../interfaces/Ingredient'

export default function IngredientCard({ ingredient }:Ingredient) {
    return (
        <StyledListCardContainer>
            <p>{ingredient}</p>
        </StyledListCardContainer>
    )
}

const StyledListCardContainer = styled.li`




`
