export const NewTodoPanel = () => {
	return (
		<form className='relative -top-20 h-11 flex justify-center items-center'>
			<div className='flex items-center justify-start h-10 bg-veryDarkDesaturatedBlue w-10/12 rounded-lg'>
				<input type='checkbox' name='check' className="ml-2 accent-veryDarkBlue"/>
				<input
					type='text'
					name='newtodo'
					placeholder='Create a new todo...'
					className='ml-2 bg-veryDarkDesaturatedBlue placeholder:text-darkGrayishBlue'
				/>
			</div>
		</form>
	);
};
