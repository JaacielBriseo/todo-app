import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		status: 'checking',
	},
	reducers: {
		checkingTodo: (state) => {
			state.status = 'authenticated'
		}
	},
});

// Action creators are generated for each case reducer function
export const {checkingTodo} = todoSlice.actions;
