import { Ingredient } from "../interfaces/Ingredient"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


/* export async function getIngredients(): Promise<Ingredient[]> {


    const res = await fetch('http://localhost:3005/ingredients')
    const data = await res.json()

    return data
    
}
export async function addIngredient(ingredient:object): Promise<Ingredient> {

    const res = await fetch('/ingredients', { 
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: {
            'Content-Type': 'application/json'
        }

     })

     const data = await res.json()

     return data   
}
 */


export const ingredientsApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/ingredients/' }),
    endpoints: (builder) => ({
      getIngredients: builder.query<Ingredient, string>({
        query: (name) => `ingredients`,
      }),
    }),
  })

  export const { useGetIngredients } = ingredientsApi