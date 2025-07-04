import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({ //crate Slice
  name: 'counter',
  initialState,
  
  reducers: {                    //listedDown all the reducer functions
    increment: (state) => {        //Action( increment,decrement,incrementByAmount)-->logic
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;