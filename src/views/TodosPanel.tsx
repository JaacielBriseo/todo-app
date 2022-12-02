import { PanelFooter } from '../components/PanelFooter';
import { useTodosPanel } from '../hooks';
export const TodosPanel = () => {
	const { todoList, toggleCompleted, deleteTodo, check, cross } = useTodosPanel();

	return (
		<div className='container relative bottom-16 w-10/12 mx-auto divide-y rounded-lg bg-white dark:divide-neutral-700 dark:bg-veryDarkDesaturatedBlue'>
			{todoList.map(({ task, id, completed }) => {
				return (
					<div key={id} className='flex justify-between items-center h-10'>
						<div className='flex'>
							<button
								name={task}
								onClick={() => toggleCompleted(id)}
								className={`border border-lightGrayishBlue dark:border-veryDarkGrayishBlue ml-4 rounded-full h-5 w-5 flex items-center justify-center ${
									completed && 'bg-gradient-to-br from-check1 to-check2'
								}`}
							>
								<img src={check} alt='Check' className={`${!completed ? 'hidden' : 'block'}`} />
							</button>
							<p
								className={`ml-2 mt-1 text-xs dark:text-slate-400 tracking-wider ${
									completed && 'line-through text-veryLightGrayishBlue dark:text-slate-600'
								}`}
							>
								{task}
							</p>
						</div>
						<div>
							<button
								onClick={() => deleteTodo(id)}
								className='mr-3 rounded-full h-3 w-3 flex items-center justify-center'
							>
								<img src={cross} alt='Cross' />
							</button>
						</div>
					</div>
				);
			})}
			<PanelFooter />
		</div>
	);
};
