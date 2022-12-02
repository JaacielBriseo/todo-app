import { useTodosPanel } from "../hooks";

export const ActiveTodos = () => {
	const { todoList, todosLength, toggleCompleted, deleteTodo, check, cross } = useTodosPanel();
    const activeTodos = todoList.filter(todo => !todo.completed)
	return (
		<div className='container relative bottom-16 w-10/12 mx-auto divide-y divide-neutral-700 rounded-lg bg-veryDarkDesaturatedBlue'>
			{activeTodos.map(({ task, id, completed }) => {
				return (
					<div key={id} className='flex justify-between items-center h-10'>
						<div className='flex'>
							<button
								name={task}
								onClick={() => toggleCompleted(id)}
								className={`border border-neutral-700 ml-4 rounded-full h-5 w-5 flex items-center justify-center ${
									completed && 'bg-gradient-to-br from-check1 to-check2'
								}`}
							>
								<img src={check} alt='Check' className={`${!completed ? 'hidden' : 'block'}`} />
							</button>
							<p
								className={`ml-2 mt-1 text-xs text-slate-400 tracking-wider ${
									completed && 'line-through text-slate-600'
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
			<div className='flex justify-between items-center h-10 text-slate-600'>
				<span className='text-xs ml-5'>{todosLength} Items left</span>
				<span className='text-xs mr-3'>Clear completed</span>
			</div>
		</div>
	);
};
