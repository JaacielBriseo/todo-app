import { FormEvent, SyntheticEvent, useState } from 'react';
import { addNewTodo } from '../store/todo/todoSlice';
import { useAppDispatch } from './useReduxTypes';

export const useNewTodo = () => {
	const [newTodo, setNewTodo] = useState('');
	const dispatch = useAppDispatch();

	const onSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
        if(newTodo === '') return
		dispatch(addNewTodo(newTodo));
		setNewTodo('');
	};

	const onInputChange = (event: FormEvent<HTMLInputElement>): void => {
		setNewTodo(event.currentTarget.value);
	};
	return {
		onSubmit,
		newTodo,
		onInputChange,
	};
};
