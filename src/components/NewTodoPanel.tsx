import React, { useState } from 'react';
import { check } from '../assets';
import { useAppDispatch } from '../hooks/useReduxTypes';
import { addNewTodo } from '../store/todo/todoSlice';

export const NewTodoPanel = () => {
	const [newTodo, setNewTodo] = useState('');
	const dispatch = useAppDispatch()
	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		dispatch(addNewTodo(newTodo));
	};
	const onInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
		setNewTodo(event.currentTarget.value)
	};
	return (
		<form onSubmit={onSubmit} className='relative -top-20 h-11 flex justify-center items-center'>
			<div className='flex items-center justify-start h-10 bg-veryDarkDesaturatedBlue w-10/12 rounded-lg'>
				<button
					type='submit'
					className={`border border-neutral-700 ml-4 rounded-full h-5 w-5 flex items-center justify-center ${'bg-gradient-to-br from-check1 to-check2'}`}
				>
					<img src={check} alt='Check' className={`'hidden' : 'block'}`} />
				</button>
				<input
					type='text'
					name='newtodo'
					onChange={onInputChange}
					placeholder='Create a new todo...'
					className='ml-2 bg-veryDarkDesaturatedBlue placeholder:text-darkGrayishBlue'
				/>
			</div>
		</form>
	);
};
