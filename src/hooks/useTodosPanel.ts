import { clearCompleted, deleteTask, isCompleted } from '../store/todo/todoSlice';
import { useAppDispatch, useAppSelector } from './useReduxTypes';
import { check, cross } from '../assets';
export const useTodosPanel = () => {
	const todoList = useAppSelector((state) => state.todo.todos);
	const dispatch = useAppDispatch();
	const todosLength:number = todoList.filter((todo) => !todo.completed).length;
	const toggleCompleted = (id: number) => {
		dispatch(isCompleted(id));
	};
	const deleteTodo = (id: number) => {
		dispatch(deleteTask(id));
	};
	const removeCompleted = () => {
		dispatch(clearCompleted())
	}
	return {
		todoList,
		todosLength,
		toggleCompleted,
		deleteTodo,
		check,
		cross,
		removeCompleted
	};
};
