import { Ingredient } from "../interfaces/Ingredient"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const ingredientsApi = createApi({
    reducerPath: 'ingredientsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),

    tagTypes: ['Ingredients'],
    endpoints: (build) => ({
      getIngredients: build.query<Ingredient[], void>({
        query: () => `ingredients`,
        

        providesTags: ['Ingredients'],

      }),


      addIngredient: build.mutation<Ingredient, Partial<Ingredient>>({

        query: (body) => {
          return {
            url: `ingredients`,
            method: 'POST',
            body: body,
          }
        },
      
        
        invalidatesTags: [{ type: 'Ingredients'}],

      })

    }),

  })

export const { useGetIngredientsQuery, useAddIngredientMutation } = ingredientsApi