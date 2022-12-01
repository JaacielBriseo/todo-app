import check from '../assets/icon-check.svg';
import cross from '../assets/icon-cross.svg';
import { useAppSelector } from '../hooks/useReduxTypes';
export const TodosPanel = () => {
	const todoList = useAppSelector((state) => state.todo.todos);
	return (
		<div className='w-10/12 mx-auto divide-y divide-gray-200 bg-veryLightGray dark:divide-gray-700 dark:bg-veryDarkBlue dark:text-lightGrayishBlue'>
			{todoList?.map((item) => {
				return (
					<div key={item} className='h-12 flex justify-between items-center dark:bg-veryDarkDesaturatedBlue'>
						<div className='flex items-center'>
							<button className='bg-gradient-to-br from-check1 to-check2 ml-4 rounded-full h-5 w-5 flex items-center justify-center'>
								<img src={check} alt='' />
							</button>
							<p className='ml-2 text-xs text-darkGrayishBlue tracking-wider'>{item}</p>
						</div>
						<div>
							<button className='mr-3 rounded-full h-3 w-3 flex items-center justify-center'>
								<img src={cross} alt='' />
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
