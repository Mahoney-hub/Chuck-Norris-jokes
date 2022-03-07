import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('failed to load!!!')
        }
    }
)