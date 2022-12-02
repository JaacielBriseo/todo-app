import { useNewTodo } from '../hooks';

export const NewTodoPanel = () => {
	const { onSubmit, newTodo, onInputChange } = useNewTodo();
	return (
		<form onSubmit={onSubmit} className='relative -top-20 max-w-lg mx-auto h-11 flex justify-center items-center'>
			<div className='flex items-center justify-start h-10 bg-white dark:bg-veryDarkDesaturatedBlue w-10/12 rounded-lg'>
				<button
					type='submit'
					className='active:bg-brightBlue border border-neutral-700 ml-4 rounded-full h-5 w-5 flex items-center justify-center'
				></button>
				<input
					type='text'
					name='newtodo'
					value={newTodo}
					onChange={onInputChange}
					placeholder='Create a new todo...'
					className='ml-2 outline-none caret-brightBlue dark:bg-veryDarkDesaturatedBlue placeholder:text-darkGrayishBlue placeholder:text-xs'
				/>
			</div>
		</form>
	);
};
