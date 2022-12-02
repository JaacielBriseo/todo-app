import { deleteTask, isCompleted } from '../store/todo/todoSlice';
import { useAppDispatch, useAppSelector } from './useReduxTypes';
import { check, cross } from '../assets';
export const useTodosPanel = () => {
	const todoList = useAppSelector((state) => state.todo.todos);
	const dispatch = useAppDispatch();
	const todosLength = todoList.filter((todo) => !todo.completed).length;
	const toggleCompleted = (id: number) => {
		dispatch(isCompleted(id));
	};
	const deleteTodo = (id: number) => {
		dispatch(deleteTask(id));
	};
	return {
		todoList,
		todosLength,
		toggleCompleted,
		deleteTodo,
		check,
		cross,
	};
};
