import { createSlice } from '@reduxjs/toolkit';
interface TodosTypes {
	todos: string[];
}
const initialState: TodosTypes = {
	todos: [],
};
export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: ['Jog around', 'Workout', 'Eat', 'Sleep', 'Code', 'Repeat'],
	},
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = todoSlice.actions;
