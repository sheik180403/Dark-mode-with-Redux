import { createSlice } from "@reduxjs/toolkit";

const initialState={
    background:'white',
    text:'black'
}

const themeSlice= createSlice({
    name:"theme",
    initialState,
    reducers:{
        switch_theme:(state)=>{
            state.background= state.background=== 'white' ? '#292c35' : 'white'
            state.text=state.text==='black' ? 'white' : 'black'
        }
    }
})

export const themeAction= themeSlice.actions
export  const themeReducer= themeSlice.reducer

