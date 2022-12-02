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
		task: 'Complete online JavaScript course',
		completed: true,
	},
	{
		id: 1,
		task: 'Jog around the park 3x',
		completed: false,
	},
	{
		id: 2,
		task: '10 minutes meditation',
		completed: false,
	},
	{
		id: 3,
		task: 'Read for 1 hour',
		completed: false,
	},
	{
		id: 4,
		task: 'Pick up groceries',
		completed: false,
	},
	{
		id: 5,
		task: 'Complete Todo App on Frontend Mentor',
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
			state.todos = [{ id: state.todos.length, task: payload, completed: false }, ...state.todos];
		},
		clearCompleted: (state) => {
			state.todos = state.todos.filter((todo) => !todo.completed);
		},
	},
});

// Action creators are generated for each case reducer function
export const { isCompleted, deleteTask, addNewTodo, clearCompleted } = todoSlice.actions;
