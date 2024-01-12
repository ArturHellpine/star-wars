import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { Character, Result } from "../../types";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/',
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: (build) => ({
        fetchAllCharacters: build.query<Character, number>({
            query: (limit: number) => ({
                url: '/people/',
                method: 'GET',
            })
        }),
        fetchOneCharacter: build.query<Result, string>({
            query: (id) => ({
                url: `/people/${id}`,
                method: 'GET',
            })
        })
    })
})