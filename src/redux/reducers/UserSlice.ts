// В Redux reducer - это чистая функция, которая принимает state и action
// И в зависимости от action как то изменяет state и возвращает state в обновленном виде

// В Redux Toolkit есть слайсы - это обертка над reducer,
// Которая упрощает функционал и упрощает работу

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUsers} from './ActionCreators';
import {v1} from 'uuid';

export type FavoriteJokes = {
    id: string
    title: string
}

export type UserState = {
    value: string
    error: string
    favoriteJokes: FavoriteJokes[]
}

const initialState: UserState = {
    value: '',
    error: '',
    favoriteJokes: []
}

// Создаем сам slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    // Поле аналогичное конструкции switch case в обычном reducer
    reducers: {
        addToFavorites(state, action: PayloadAction<string>) {
            if (state.favoriteJokes.length >= 10) state.favoriteJokes.shift()
            state.favoriteJokes.push({id: v1(), title: action.payload})
        },
        deleteJokes(state, action: PayloadAction<string>) {
            state.favoriteJokes = state.favoriteJokes.filter(item => item.title !== action.payload)
        },
        deleteJokesID(state, action: PayloadAction<string>) {
            state.favoriteJokes = state.favoriteJokes.filter(item => item.id !== action.payload)
        },
        deleteAllJokes(state) {
            state.favoriteJokes = []
        },
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserState>) => {
            state.error = ''
            state.value = action.payload.value
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})

export default userSlice.reducer;

