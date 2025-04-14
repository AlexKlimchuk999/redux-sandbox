import { createSlice } from '@reduxjs/toolkit';

// Создаём slice (редюсер + экшены в одном месте)
const counterSlice = createSlice({
    name: 'counter',
    initialState: 15,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        random:(state, action) => state + action.payload 
    }
});
// Экспортируем экшены
export const { increment, decrement, random } = counterSlice.actions;

export default counterSlice;