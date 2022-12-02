import { createSlice } from '@reduxjs/toolkit';
interface TodoProps {
	id: number;
	task: string;
	completed: boolean;
}
interface TodosTypes extends Array<TodoProps> {}
const todos: TodosTypes = [
	{
		id: 0,
		task: 'Meditate',
		completed: false,
	},
	{
		id: 1,
		task: 'Workout',
		completed: false,
	},
	{
		id: 2,
		task: 'Code',
		completed: false,
	},
];
export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos,
	},
	reducers: {
		isCompleted: (state, { payload }) => {
			state.todos = state.todos.map((todo) => (todo.id === payload ? { ...todo, completed: !todo.completed } : todo));
		},
		deleteTask: (state, { payload }) => {
			const foundTask = state.todos.find((task) => task.id === payload);
			if (foundTask) {
				state.todos.splice(state.todos.indexOf(foundTask), 1);
			}
		},
		addNewTodo: (state, { payload }) => {
			state.todos = [{id:state.todos.length , task: payload, completed:false}, ...state.todos];
		},
	},
});

// Action creators are generated for each case reducer function
export const { isCompleted, deleteTask, addNewTodo } = todoSlice.actions;
