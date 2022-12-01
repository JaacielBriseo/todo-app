import check from '../assets/icon-check.svg';
export const TodosPanel = () => {
	const mockTodos = [
		{
			todo: 'Jog around',
		},
		{
			todo: 'Jog around',
		},
		{
			todo: 'Jog around',
		},
		{
			todo: 'Jog around',
		},
	];
	return (
		<div className='dark:text-lightGrayishBlue divide-y divide-veryDarkGrayishBlue w-10/12 mx-auto rounded-lg bg-veryDarkBlue'>
			{mockTodos.map(({ todo }) => {
				return (
					<div key={todo} className='h-10 flex items-center bg-veryDarkDesaturatedBlue rounded-lg'>
						<button className='bg-brightBlue rounded-full h-5 w-5 flex items-center justify-center'>
							<img src={check} alt='' />
						</button>
						<p className='ml-2 text-xs tracking-wider'>{todo}</p>
					</div>
				);
			})}
		</div>
	);
};
