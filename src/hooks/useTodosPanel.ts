import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './useReduxTypes';
import { clearCompleted, deleteTask, isCompleted } from '../store/todo/todoSlice';
import { check, cross } from '../assets';

export const useTodosPanel = () => {
	const todoList = useAppSelector((state) => state.todo.todos);
	const dispatch = useAppDispatch();
	const todosLength: number = todoList.filter((todo) => !todo.completed).length;
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todoList));
	}, [todoList]);

	const toggleCompleted = (id: number): void => {
		dispatch(isCompleted(id));
	};
	const deleteTodo = (id: number): void => {
		dispatch(deleteTask(id));
	};
	const removeCompleted = (): void => {
		dispatch(clearCompleted());
	};
	return {
		todoList,
		todosLength,
		toggleCompleted,
		deleteTodo,
		check,
		cross,
		removeCompleted,
	};
};
