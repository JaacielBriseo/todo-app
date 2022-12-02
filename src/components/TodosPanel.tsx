import check from '../assets/icon-check.svg';
import cross from '../assets/icon-cross.svg';
import { useAppSelector, useAppDispatch } from '../hooks/useReduxTypes';
import { deleteTask, isCompleted } from '../store/todo/todoSlice';
export const TodosPanel = () => {
	const todoList = useAppSelector((state) => state.todo.todos);
	const dispatch = useAppDispatch();

	const toggleCompleted = (id: number) => {
		dispatch(isCompleted(id));
	};
	const deleteTodo = (id: number) => {
		dispatch(deleteTask(id));
	};
	return (
		<div className='container relative bottom-16 w-10/12 mx-auto divide-y divide-neutral-700 rounded-lg bg-veryDarkDesaturatedBlue'>
			{todoList.map((item) => {
				return (
					<div key={item.id} className='flex justify-between items-center h-10'>
						<div className='flex'>
							<button
								name={item.task}
								onClick={() => toggleCompleted(item.id)}
								className={`border border-neutral-700 ml-4 rounded-full h-5 w-5 flex items-center justify-center ${
									item.completed && 'bg-gradient-to-br from-check1 to-check2'
								}`}
							>
								<img src={check} alt='Check' className={`${!item.completed ? 'hidden' : 'block'}`} />
							</button>
							<p className={`ml-2 mt-1 text-xs text-slate-400 tracking-wider ${item.completed && 'line-through text-slate-600'}`}>
								{item.task}
							</p>
						</div>
						<div>
							<button
								onClick={() => deleteTodo(item.id)}
								className='mr-3 rounded-full h-3 w-3 flex items-center justify-center'
							>
								<img src={cross} alt='Cross' />
							</button>
						</div>
					</div>
				);
			})}
			<div className='flex justify-between items-center h-10 text-slate-600'>
				<span className='text-xs ml-5'>Items left</span>
				<span className='text-xs mr-3'>Clear completed</span>
			</div>
		</div>
	);
};
