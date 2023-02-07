import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import axios from 'axios'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }
export const fetchmovie = createAsyncThunk(    
'users/fetchmovie',
    async (userId,thunkAPI) =>{
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b743af1d4fde1d65af33c40dcccce87')
    return response.data
}
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState:{
    data:[],
    status:null
  },
  reducers: {
    
    },
    extraReducers:{
        [fetchmovie.fulfilled]:(state,{payload})=>{
            state.data = payload;
            state.status = 'success';

        },
        [fetchmovie.pending]:(state)=>{
            state.status = 'panding';
        },
        [fetchmovie.rejected]:(state)=>{
            state.status = 'failed';
        }
    }

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = movieSlice.actions

export default movieSlice.reducer